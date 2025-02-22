print_start "Installing Homebrew\n"

which -s brew
if [[ $? != 0 ]] ; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

eval "$(/opt/homebrew/bin/brew shellenv)"


print_progress "Updating brew\n"

brew -v update
brew upgrade --force-bottle


print_text ""
print_progress "Tapping repositories\n"

brew tap dart-lang/dart
brew tap dteoh/sqa
brew tap githubutilities/tap
brew tap homebrew/cask
brew tap homebrew/cask-drivers
brew tap homebrew/cask-fonts
brew tap homebrew/cask-versions
brew tap homebrew/core
brew tap homebrew/services


print_text ""
print_progress "Core utilities\n"

brew install bash
brew install coreutils
brew install findutils
brew install gawk
brew install grep
brew install moreutils
brew install ncurses
brew install openssh
brew install openssl


print_text ""
print_progress "Programming languages\n"

brew install dart
brew install deno
brew install go
brew install lua
brew install perl
brew install rust
brew install rustup-init


print_text ""
print_progress "Programming tools\n"

brew install cocoapods
brew install watchman


print_text ""
print_progress "Terminal tools\n"

brew install bat
brew install dust
brew install eth-p/software/bat-extras
brew install exa
brew install fd
brew install fx
brew install fzf
brew install git
brew install git-delete-merged-branches
brew install git-delta
brew install glow
brew install gnu-sed
brew install hyperfine
brew install jq
brew install marcosmoura/homebrew-tap/tsv-utils
brew install ncdu
brew install starship
brew install terminal-notifier
brew install tldr
brew install tree
brew install vivid
brew install zoxide


print_text ""
print_progress "Terminal apps\n"
brew install bandwhich
brew install koekeishiya/formulae/skhd
brew install koekeishiya/formulae/yabai
brew install liquidctl
brew install mas
brew install osx-cpu-temp
brew install tokei


print_text ""
print_progress "Fonts\n"

brew install --cask font-fira-code
brew install --cask font-hack-nerd-font
brew install --cask font-inter
brew install --cask font-jetbrains-mono
brew install --cask font-jetbrains-mono-nerd-font


print_text ""
print_progress "QuickLook extensions\n"

brew install --no-quarantine qlcolorcode
brew install --no-quarantine qlimagesize
brew install --no-quarantine qlmarkdown
brew install --no-quarantine qlstephen
brew install --no-quarantine qlvideo
brew install --no-quarantine quicklook-json
brew install --no-quarantine quicklookase
brew install --no-quarantine webpquicklook


print_text ""
print_progress "Cleaning up\n"

brew cleanup

print_text ""
print_success "Homebrew installed! \n"
