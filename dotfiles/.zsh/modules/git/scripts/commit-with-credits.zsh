#!/usr/bin/env zsh

source ~/.zsh/utils.sh
source ~/.zsh/modules/git/scripts/utils.zsh
source ~/.zsh/modules/git/git.plugin.zsh

COMMIT_NAME=$1
COMMIT_EMAIL=$2
COMMIT_MESSAGE=$3
COMMIT_AUTHOR="$COMMIT_NAME <$COMMIT_EMAIL>"

function print_usage() {
  print_info "Usage: git give-credit \"<name>\" \"<email>\" \"<message>\""
}

if [ -z "${COMMIT_NAME}" ]; then
  print_error "No author name was provided."
  print_usage
  return 1
fi

if [ -z "${COMMIT_EMAIL}" ]; then
  print_error "No author email was provided."
  print_usage
  return 1
fi

if [ -z "${COMMIT_MESSAGE}" ]; then
  print_error "No message was provided."
  print_usage
  return 1
fi

print_start "Commiting as $COMMIT_AUTHOR \n"

git commit --author "$COMMIT_AUTHOR" -m $COMMIT_MESSAGE

print_success "Done!"
