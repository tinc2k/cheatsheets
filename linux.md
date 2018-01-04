# linux

##  various

```
# check disk space
df -h

```

## package management: dpkg, apt

```
# list packages
dpkg --list

# package info
dpkg --info packageName

# install package
apt-get install {package}

# remove package
apt-get remove {package}

# update package index files
apt-get update

# update packages where newer version available
apt-get upgrade
```

## ssh

```
# failed login attempts
cat /var/log/auth.log | grep 'sshd.*Invalid'

# successful logins
cat /var/log/auth.log | grep 'sshd.*opened'
```


## refs

* https://www.cyberciti.biz/tips/linux-security.html
* http://oskarhane.com/debian-see-all-failed-ssh-login-attempts/
