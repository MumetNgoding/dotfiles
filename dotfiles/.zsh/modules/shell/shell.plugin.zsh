#!/usr/bin/env zsh

source ~/.zsh/utils.sh


# Open zsh config
alias dotfiles="code ~/Projects/dotfiles"

# Open zsh config
alias zshconfig="code ~/.zshrc"

# Reload the shell (i.e. invoke as a login shell)
alias reload="exec $SHELL -l"

# Alias to VSCode
alias code='code-insiders '
alias c='code-insiders '

# Always enable colored `grep` output
# Note: `GREP_OPTIONS="--color=auto"` is deprecated, hence the alias usage.
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

# sudo editors
alias vim='nvim'
alias svim='sudo vim'
alias snano='sudo nano'

# Better du
alias du='dust -x -X .git -X node_modules'

# Better man
alias help='tldr'
alias man='batman'

# Chmod -x
alias chmox='chmod -x'

function updateZsh {
  print_start "Updating zsh plugins \n"

  sheldon lock --reinstall
  export SNAZZY_COLORS=$(vivid generate snazzy)
  export LS_COLORS=$SNAZZY_COLORS
  echo $SNAZZY_COLORS > ~/.zsh/static/snazzy-colors.txt
  fast-theme ~/syntax-theme.ini > /dev/null

  print_success "zsh plugins updated! \n"
}
