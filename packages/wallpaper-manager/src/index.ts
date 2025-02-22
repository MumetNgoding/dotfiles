#!/usr/bin/env zx

import { access, constants, readFile, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { $ } from 'zx'

const homeDir = os.homedir()
const wallpaperCacheLocation = path.resolve(homeDir, '.wallpapercache')

function toInt(value: string): number {
  return Number.parseInt(value, 10)
}

function getCacheKey(space: number) {
  return `space-${space}`
}

async function getSpaceData() {
  const space = await $`yabai -m query --spaces --space | jq '.index'`
  const display = await $`yabai -m query --spaces --space | jq '.display'`

  if (display) {
    return {
      space: toInt(space.stdout),
      display: toInt(display.stdout) - 1,
    }
  }

  return {}
}

async function getWallpaperCache() {
  try {
    await access(path.resolve(wallpaperCacheLocation), constants.R_OK | constants.W_OK)
  } catch {
    return {}
  }

  const cache = await readFile(wallpaperCacheLocation, 'utf8')

  if (cache) {
    return JSON.parse(cache)
  }
}

async function applyWallpaper(space: number, display: number, cache: Record<string, string>) {
  const wallpaperLocation = path.resolve(homeDir, 'wallpapers', `${space}.jpg`)

  try {
    await $`wallpaper set ${wallpaperLocation} --screen ${display}`
  } catch {
    throw new Error('Could not set wallpaper.')
  }

  const newCache = {
    ...cache,
    [getCacheKey(space)]: wallpaperLocation,
  }

  await writeFile(wallpaperCacheLocation, JSON.stringify(newCache, null, 2), 'utf8')
}

async function onWallpaperChange() {
  const { space, display } = await getSpaceData()

  if (space === undefined || display === undefined) {
    throw new Error('No space or display found.')
  }

  const cache = await getWallpaperCache()

  if (!cache[getCacheKey(space)]) {
    await applyWallpaper(space, display, cache)
  }
}

async function onCacheClean() {
  await writeFile(wallpaperCacheLocation, JSON.stringify({}, null, 2), 'utf8')
}

async function init() {
  const [action = 'change'] = process.argv.slice(2)

  if (action === 'change') {
    await onWallpaperChange()
  }

  if (action === 'clean') {
    await onCacheClean()
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
init()
