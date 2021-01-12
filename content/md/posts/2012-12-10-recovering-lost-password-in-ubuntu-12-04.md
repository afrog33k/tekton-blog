{:title "Recovering lost password in Ubuntu 12.04"
:layout :post
:tags  ["linux" "ubuntu"]
:toc true}

Yesterday, While I was trying to help my friend with his lost Ubuntu password, I explored the following two methods to do this quite easily.

First method is using the recovery mode. This method is pretty simple.

In the grub menu, select the recovery mode. Then in the menu that appear, scroll down to the option 'Drop to root shell prompt'. Now you will get a shell prompt with root authentication at the bottom of the screen. Now before changing the password we have to remount the root in read write mode and for that run the following command.

 **mount -rw -o remount /**

Now go ahead and change the password of the corresponding user using the following command.

 **passwd <username>**

Now the prompt will ask for the new password. After entering it twice, as will be asked by the prompt, exit from the prompt by just entering **exit.** Now select the resume normal booting option. Sometimes when booting into the system from recovery mode can give you a disoriented display screen and simple restarting is the solution for this.

Although the above method worked just fine in my system, my friend didn't have much luck in making this work in his system ( God knows why. ). So I tried another method and that is using the live CD. The steps I followed are as follow :

1\. Boot into the Ubuntu live CD and select the option try Ubuntu.

2\. Open  the terminal and mount the partition that is the root partition for your actual Ubuntu as mount point.

*   If you don't know the root partition, open gparted and see which drive is set as bootable.

Suppose /dev/sda1 is your root partition. Now to mount it as the mount point run the command :

 **sudo mount /dev/sda1 /mnt**

3\. Make this mount point as root and for this we use chroot :

**sudo chroot /mnt**

4\. Now you can proceed with changing password of the corresponding user, i.e. :

 **sudo passwd <username>**

Enter the new password as asked.

5\. Un-mount the root partition

**umount /mnt**

6\. Restart the system and now you can log in to your system with the new password.

I found some more methods too, online, but the above two worked perfectly for me. So didn't bother to experiment with anything else. Hope this works for my friend too.
