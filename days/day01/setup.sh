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
    # INSTALLING AND CONFIGURING NODE JS 6.x
    # ======================================
    echo "1\. Installing nodejs 6.x"
    echo "..............."
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
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
    sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.15.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

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
    # DOCKER CONFIGURATION
    # =============
    clear
    echo "Configuring Docker Environment"
    echo "-------------------------"

    echo
    echo "1\. Installing build-essential... "
    echo
    sudo apt-get install build-essential g++

    echo "2\. Changing folder permission and ownership to current user in /home/$SUDO_USER/.npm/"
    sudo chown -R $SUDO_USER:$SUDO_USER /home/$SUDO_USER/.npm/

    echo
    echo "3\. Editing docker file... "
    echo
    #sudo sed -i '/DOCKER_OPTS="/c\DOCKER_OPTS="--dns 8.88.8.8 --dns 192.168.13.200 --dns 192.168.13.201"' /etc/default/docker

    echo
    echo "4\. Restarting docker service... "
    echo
    sudo service docker restart
    
    # =============
    # TOOLS INSTALLATION
    # =============
    clear
    echo "Installing Tools"
    echo "-------------------------"

	echo
    echo "1\. Installing MC aka NortonCommander... "
    echo
    sudo apt-get install mc
    
	echo
    echo "2\. Installing pip "
    echo
    sudo apt-get update
    sudo apt-get upgrade
	sudo -H apt-get install python-pip && sudo -H pip install -U pip
	
    echo
    echo "2\. Installing awscli "
    echo
    sudo pip install awscli --force-reinstall --upgrade
    
    echo
    echo "3\. Installing tmux "
    echo
    sudo apt-get update
    sudo apt-get install tmux
   
    echo
    echo "4\. Installing OpenJDK 8 JRE/JDK"
    echo
    sudo apt install openjdk-8-jre
    
    echo
    echo "5\. Installing Gnome Tweak"
    echo
    sudo apt install gnome-tweak-tool
    gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'
    
    echo
    echo "6\. Installing Net Tools (inclusing netstat)"
    echo
    sudo apt install net-tools
    
    echo
    echo "7\. Installing HTop an improved tool over top (monitoring resources)"
    echo
    sudo apt-get install htop
    
    echo
    echo "8\. Restarting your ubuntu session"
    echo
    sudo shutdown -r now 
    echo
else
    echo
    echo "Please review file content in order to find possible errors"

fi

echo