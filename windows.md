# windows

## shortcuts

`❖` `.` Emoji

`❖` `Tab` Task View

`Ctrl` `❖` `D` New virtual desktop

`Ctrl` `❖` `←/→` Switch virtual desktop

`Ctrl` `❖` `F4` Close current virtual desktop

## quick windows box installer

Note: run under admin privileges!

```
# change execution policy
Set-ExecutionPolicy Unrestricted

# install chocolatey
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))

### util
cinst git.install -y
cinst 7zip.install -y
cinst cmder -y
cinst veracrypt -y

# browser
cinst googlechrome -y
cinst firefox -y --force -packageParameters "l=en-US"

# etc
cinst vlc -y
cinst foobar2000 -y
cinst itunes -y
cinst foxitreader -y
cinst steam -y
cinst dropbox -y
cinst googledrive -y
cinst f.lux -y
cinst hexchat -y
cinst skype -y

#TODO keepass/keeweb
```

## terminal

* https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-settings
* https://docs.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes

## refs 

* http://boxstarter.org/WebLauncher
* http://boxstarter.org/WinConfig
* https://gist.github.com/tinc2k/58e57572a72acb3fc169

Set-WindowsExplorerOptions -EnableShowHiddenFilesFoldersDrives -EnableShowProtectedOSFiles -EnableShowFileExtensions -EnableShowFullPathInTitleBar
Set-TaskbarOptions -Size Small -Lock -Dock Bottom -Combine Never
