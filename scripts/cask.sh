#!/bin/sh

printMsg "BREW" "Installing casks..."

# Browsers
brew cask install google-chrome-canary
brew cask install firefox-nightly

# Development
brew cask install visual-studio-code-insiders
brew cask install iterm2-nightly
brew cask install android-studio-preview
brew cask install java8
brew cask install reactotron
brew cask install jetbrains-toolbox
brew cask install imageoptim
brew cask install figma
brew cask install zeplin


# Communication
brew cask install franz

# Cloud
brew cask install google-backup-and-sync

# Games
brew cask install steam
brew cask install league-of-legends

# Productivity
brew cask install alfred
brew cask install kap
brew cask install hammerspoon
brew cask install spectacle
brew cask install slowquitapps

# Media
brew cask install spotify
brew cask install spotmenu
brew cask install subtitle-master
brew cask install vlc
brew cask install mplayerx

# Quicklook extensions
brew cask install qlcolorcode
brew cask install qlimagesize
brew cask install qlmarkdown
brew cask install qlstephen
brew cask install qlvideo
brew cask install quicklook-json

# Fonts
brew cask install font-fira-code
brew cask install font-hack
brew cask install font-hack-nerd-font

# Other
brew cask install android-file-transfer
brew cask install appcleaner
brew cask install captin
brew cask install caption
brew cask install clover-configurator
brew cask install flux
brew cask install monity-helper
brew cask install shifty
brew cask install the-unarchiver
brew cask install typora
brew cask install unified-remote

printSuccess "BREW" "Installed with success..."

printMsg "MAC APPS" "Installing App Store Apps..."

mas install 495945638 # Wake Up Time
mas install 948176063 # Boom 2
mas install 497799835 # Xcode
mas install 915542151 # Monity

printSuccess "MAC APPS" "Installed with success..."
