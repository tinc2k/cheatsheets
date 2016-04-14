# quick windows box installer
# note: run under admin privileges!

# change execution policy
Set-ExecutionPolicy Unrestricted

# install chocolatey
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))


# https://github.com/chocolatey/choco/wiki
cinst 7zip.install -y

cinst googlechrome -y
cinst firefox -y --force -packageParameters "l=en-US"

cinst vlc -y
cinst foobar2000 -y
cinst itunes -y
cinst foxitreader -y
# TODO comicrack

cinst cmder -y
cinst git.install -y
cinst atom -y

cinst steam -y

cinst dropbox -y
cinst googledrive -y

cinst f.lux -y

cinst hexchat -y
cinst skype -y

# -----------------------------------------

# docker?

# cinst keepass.install -y
# cinst truecrypt -y



# http://boxstarter.org/WebLauncher
# http://boxstarter.org/WinConfig
# https://gist.github.com/tinc2k/58e57572a72acb3fc169
Set-WindowsExplorerOptions -EnableShowHiddenFilesFoldersDrives -EnableShowProtectedOSFiles -EnableShowFileExtensions -EnableShowFullPathInTitleBar
Set-TaskbarOptions -Size Small -Lock -Dock Bottom -Combine Never
