#!/bin/bash

# ===================
# INFO PRE-REQUISITES
# ===================
echo
echo "Welcome to my environment configuration"
echo "===================================================="
echo
echo "NOTE: Before starting to take these pre-requisites into account"
echo
echo
# Show Version ubuntu
echo "1\. Ubuntu Version     ( Require: 17.10 (64.bit) OR above)"
echo "-------------------------------------------------"
lsb_release -a

echo
# Show Version Linux Kernel
echo "2\. Linux kernel version     ( Require: 3.10 or higher )"
echo "-------------------------------------------------------"
uname -r

echo
# Show privileges
echo "3\. You are in these groups     (You must be part of the sudo or root group)"
echo "---------------------------------------------------------------------------"
groups $SUDO_USER

echo
read -p "Meets all requirements? (Y/n) : " -n 1 -r
echo 

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # ======================================
    # INSTALLING CURL
    # ======================================
    sudo apt-get update
    sudo apt-get install curl
    # ======================================
    # INSTALLING AND CONFIGURING NODE JS 10.x
    # ======================================
    echo "1\. Installing nodejs 10.x"
    echo "..............."
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    sudo apt-get update
    sudo apt install npm
    
    echo "nodejs installed ...."
    echo "2\. Installing n for future node installations"
    sudo npm cache clean -f
    sudo npm install -g n

    # ==============
    # INSTALLING GIT
    # ==============
    clear
    echo "Installing GIT"
    echo "--------------"
    echo
    read -p "Enter your name (name.lastname) : " userName
    read -p "Enter your email : " userEMail

    echo 
    echo "Installing..."
    echo    
    sudo apt-get install git
    sudo add-apt-repository ppa:git-core/ppa
    sudo apt-get update
    sudo apt-get install git

    echo 
    echo "Configuring..."
    echo
    git config --global user.name $userName
    git config --global user.email $userEMail
    clear

    echo "Installation completed successfully!!!"
    echo 
    echo "Your GIT configuration"
    echo "----------------------"
    git config --list
    
    #Generate and Install SSH Keys https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
    #ssh-keygen -t rsa -b 4096 -C "enrique.ortuno@incontact.com"
    #Copy the content to your git store
    #cat ~/.ssh/id_rsa.pub

    # =================
    # INSTALLING DOCKER
    # =================
    clear
    echo
    echo "Preparing Docker Installation"
    echo "---------------------"
    echo 
    echo "1\. Update your apt sources..."
    echo
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates

    echo
    echo "2\. Add the new GPG key..."
    echo
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key adv \
               --keyserver hkp://ha.pool.sks-keyservers.net:80 \
              --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

    echo 
    echo "3\. Update file docker.list..."
    echo
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

    echo
    echo "4\. Update the APT package index..."
    echo
    sudo apt-get update
    apt-cache policy docker-ce

    echo
    echo "5\. Install the recommended package..."
    echo
    sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual

	clear
    echo
    echo "Installing Docker"
    echo "-----------------"

    echo
    echo "1\. Update your APT package index..."
    echo
    sudo apt-get update

    echo
    echo "2\. Install Docker..."
    echo
    sudo apt-get install -y docker-ce

    echo
    echo "3\. Start the Docker daemon..."
    echo
    sudo systemctl status docker

    echo
    echo "4\. Verify that docker is installed correctly by running the hellow-world image..."
    echo
    sudo docker run hello-world

    echo "5\. Manage Docker as a non-root user"
    echo "Create the docker group."
    sudo groupadd docker

    echo "6\. Add your user $SUDO_USER to the docker group. "
    sudo usermod -aG docker $SUDO_USER

    echo 
    echo "7\. Service docker restart..."
    echo
    sudo service docker restart

    echo
    echo "Installation completed successfully!!!"

    # =========================
    # INSTALLING DOCKER COMPOSE
    # =========================
    clear
    echo "Installing Docker Compose"
    echo "-------------------------"
    echo 
    echo "1\. Install Docker Compose..."
    echo
    sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

    echo
    echo "2\. Apply executable permissions to the binary..."
    echo
    sudo chmod +x /usr/local/bin/docker-compose
    
    echo
    echo "3\. Checking images Docker..."
    echo
    sudo docker images

    echo
    echo "Installation completed successfully!!!"

    # =============
    # CONFIGURATION
    # =============
    clear
    echo "Configuration environment"
    echo "-------------------------"

    echo
    echo "1\. Installing build-essential... "
    echo
    sudo apt-get install build-essential g++

    echo
    echo "2\. Installing grunt and grunt-cli... "
    echo
    sudo npm install -g grunt
    sudo npm install -g grunt-cli

    echo "3\. Changing folder permission and ownership to current user in /home/$SUDO_USER/.npm/"
    sudo chown -R $SUDO_USER:$SUDO_USER /home/$SUDO_USER/.npm/

    echo
    echo "4\. Installing Yeoman... "
    echo
    sudo npm install -g yo

    echo
    echo "5\. Editing docker file... "
    echo
    sudo sed -i '/DOCKER_OPTS="/c\DOCKER_OPTS="--dns 8.88.8.8 --dns 192.168.13.200 --dns 192.168.13.201"' /etc/default/docker

    echo
    echo "6\. Setting environment variable... "
    echo
    export NODE_ENV=development
    echo $NODE_ENV
    echo 

    echo
    echo "7\. Restarting docker service... "
    echo
    sudo service docker restart
    
    echo
    echo "8\. Installing MC aka NortonCommander... "
    echo
    sudo apt-get install mc
    
    echo
    echo "9\. pip "
    echo
    sudo apt-get update
    sudo apt-get upgrade
    sudo -H apt-get install python-pip && sudo -H pip install -U pip
    
    echo
    echo "10\. Installing awscli "
    echo
    sudo pip install awscli --force-reinstall --upgrade
    clear
    
    echo
    echo "11\. Installing dotnet core for Ubuntu 17.10 based on https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x"
    echo
    echo "Register the Microsoft Product key as trusted. "
    #curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
    #sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
    wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
    sudo dpkg -i packages-microsoft-prod.deb
    
    #echo "Set up the desired version host package feed. In this case Ubuntu 17.10 "
    #sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-artful-prod artful main" > /etc/apt/sources.list.d/dotnetdev.list'
    #sudo apt-get update
    
    echo "Install .NET Core."
    #sudo apt-get install dotnet-sdk-2.1.4
    sudo add-apt-repository universe
    sudo apt-get install apt-transport-https
    sudo apt-get update
    sudo apt-get install dotnet-sdk-2.2=2.2.108-1
    
    echo "Install 7z and rar"
    sudo apt-get install p7zip-full p7zip-rar
    
    echo
    echo "12\. Installing powerline and prompt customizations "
    echo
    sudo -H apt-get install python3-pip && sudo -H pip3 install -U pip3
    sudo -H pip3 install git+git://github.com/Lokaltog/powerline
    wget https://github.com/powerline/powerline/raw/develop/font/PowerlineSymbols.otf
    wget https://github.com/powerline/powerline/raw/develop/font/10-powerline-symbols.conf
    sudo mv PowerlineSymbols.otf /usr/share/fonts/
    fc-cache -vf /usr/share/fonts/
    sudo mv 10-powerline-symbols.conf /etc/fonts/conf.d/
    echo "Ready for edit .bash_profile file and add the following lines at end of file..."
    
    sudo apt-get install zsh
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    echo "After install zsh https://askubuntu.com/questions/342299/zsh-is-not-launched-while-opening-a-new-terminal-with-gnome-terminal"
    
    #Install Powerline fonts
    # clone
    git clone https://github.com/powerline/fonts.git --depth=1
    # install
    cd fonts
    ./install.sh
    # clean-up a bit
    cd ..
    rm -rf fonts
    
    #Install Powerline fonts https://github.com/Anthony25/gnome-terminal-colors-solarized
    sudo apt-get install dconf-cli
    git clone https://github.com/Anthony25/gnome-terminal-colors-solarized.git
    cd gnome-terminal-colors-solarized
    ./install.sh
    cd ..
    rm -rf gnome-terminal-colors-solarized
    
    wget http://raw.github.com/caiogondim/bullet-train-oh-my-zsh-theme/master/bullet-train.zsh-theme
    mv bullet-train.zsh-theme $ZSH/themes
    #Change to ZSH_THEME="bullet-train"
    
    git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k
    #Change to ZSH_THEME="powerlevel9k/powerlevel9k"
    
    echo "Installing gconftool or gconf2"
    sudo apt install gconf2
    
    echo "Installing Color Scheme for Gnome Terminal and Pantheon Terminal from: https://github.com/Mayccoll/Gogh"
    wget -O gogh https://git.io/vQgMr && chmod +x gogh && ./gogh && rm gogh
    
    
    sudo apt-get install compizconfig-settings-manager
    #Please go to: https://askubuntu.com/questions/128649/compiz-using-8-25-cpu-continually
    
    echo "After install go to: http://www.omgubuntu.co.uk/2016/10/things-to-do-after-installing-ubuntu-16-10"
    
    sudo add-apt-repository ppa:noobslab/macbuntu
    sudo apt-get update
    sudo apt-get install macbuntu-os-icons-lts-v8
    sudo apt-get install macbuntu-os-ithemes-lts-v8
    
    echo "Preparing folder for themes, PLEASE READ: https://itsfoss.com/install-themes-ubuntu/"
    mkdir ~/.themes 
    mkdir ~/.icons
    echo "Please goto https://www.gnome-look.org/browse/cat/135/"
    echo "Download any theme"
    echo "Extract it into ~/.themes AND VOILA you can change to that theme"
    
    echo "Installing Random Wallpaper"
    echo "After setup you computer please goto: https://extensions.gnome.org/extension/1040/random-wallpaper"
    echo "and ENABLE it"
    sudo apt-get install chrome-gnome-shell
    
    
    echo "Installing masalla icons"
    cd ~/Downloads
    sudo git clone https://github.com/hayderctee/masalla-icon-theme.git
    cd masalla-icon-theme
    sudo ./INSTALL
    cd ~/
    
    echo
    echo "13\. Installing go "
    echo "https://tecadmin.net/install-go-on-ubuntu/#"
    sudo apt-get update
    sudo apt-get -y upgrade
    #sudo wget https://storage.googleapis.com/golang/go1.7.1.linux-amd64.tar.gz
    sudo wget https://storage.googleapis.com/golang/go1.9.2.linux-amd64.tar.gz
    #sudo tar -zxvf  go1.7.1.linux-amd64.tar.gz -C /usr/local/
    sudo tar -xvf go1.9.2.linux-amd64.tar.gz -C /usr/local/
    export PATH=$PATH:/usr/local/go/bin
    mkdir $HOME/work
    export GOPATH=$HOME/work

    sudo npm install -g serverless
    sudo go get -u github.com/remind101/assume-role 
    
    aws configure
    aws configure --profile dev
    
    echo
    echo "14\. Installing tmux "
    echo
    sudo apt-get update
    sudo apt-get install tmux
    
    echo "Configuration completed...."
    clear
    
    echo
    echo "15\. Installing OpenJDK 8 JRE/JDK"
    echo
    sudo apt install openjdk-8-jre
    
    echo
    echo "16\. Installing Gnome Tweak"
    echo
    sudo apt install gnome-tweak-tool
    gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'
    gsettings set org.gnome.shell.extensions.dash-to-dock scroll-action 'cycle-windows'
    
    echo
    echo "17\. Installing Net Tools (inclusing netstat)"
    echo
    sudo apt install net-tools
    
    echo
    echo "18\. Installing HTop an improved tool over top (monitoring resources)"
    echo
    sudo apt-get install htop
    
    echo
    echo "19\. Restart your ubuntu session"
    echo

    echo
    echo "Installed and Configured completed successfully!!!"
    echo
    echo "Details Installed"
    echo "   - Git "
    echo "   - Docker "
    echo "   - Docker-Compose"
    echo
    echo "Details Configured"
    echo "   - Pulling Docker Images"
    echo "   - Additional Configurations"
    echo

    echo "Please restart your session if it didn't restart automatically before continuing"
    sudo shutdown -r now 
    echo
else
    echo
    echo "Please run the info.sh file for more details"

fi

echo