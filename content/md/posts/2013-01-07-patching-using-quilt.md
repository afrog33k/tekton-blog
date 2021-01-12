{:title "Patching using quilt"
:layout :post
:tags  ["linux"]
:toc true}
Patch files are files used to apply changes to the source code of a computer program. These changes may be for fixing bugs or for extending functionality. Quilt is a software utility for managing patches. Quilt is highly used among Linux kernal developers for managing patches. I started using quilt when I had to patch a piece of code while I was packaging for debian. Debian source packages usually use quilt. It has been incorporated into dpkg (Debian's package manager).

So, Let's say you downloaded a debian package and found a bug in it. So you will have to create a patch and send it to the Debian developers for their review and approval.

Assuming that you've quilt installed (sudo apt-get install quilt) first step is to create the configuration file .quiltrc.

Create a file named .quiltrc in your home directory and open it up in your favorite editor. Copy the following lines into the editor, save it and exit.

**QUILT\_PATCHES=debian/patches
QUILT\_NO\_DIFF\_INDEX=1
QUILT\_NO\_DIFF\_TIMESTAMPS=1
QUILT\_REFRESH\_ARGS="-p ab"**

Quilt work with some directories. It will create a .pc/ directory and patches/ directory. As in the case of debian packages, you can find the patches you made (Or going to make) under debian/patches/ directory.

Now we will create the new patch.

**quilt new this\_is\_my\_patch.patch**

Next step is to let quilt know which file we are going to edit and for that the command is as follows.

**quilt add /path/to/the/file/to/edit**

Now open up the file in your favorite editor, make the changes, save it and exit. Alternatively, you can add and edit the file in a single step like this :

**quilt edit path/to/the/file/to/edit**

The file will open up either in nano or vim where you can make changes, save and exit.

Now to apply the patch enter the command:

**quilt refresh**

Now two other important commands while we are dealing with quilt is pop and push. Pop will remove a patch while push will apply it. The patches are basically arranged in a stack like form by quilt. If we do a pop, the patch we applied recently will be removed, even though we can find the patch file under patches directory. So when we do a push now, that patch will be re-applied. Commands for both these are quite straightforward.

**quilt pop**

**quilt push**

Now, If you want to edit an existing patch, Make sure that the patch is applied. That is,

**quilt push -a** 

('a' as in all)

Then edit the file as required and just run:

**quilt refresh**

While we are building the package, We may want to remove all the patches associated with it. And to do that either we can enter the command **quilt pop -a** each time we build the package or we can create a file named local-changes under debian/source/ directory containing the single line unapply-patches so that the patches will be automatically removed after a local build (Considered as a good practice. ).

**echo "unapply-patches" > debian/source/local-changes**

 That's pretty much the most basic steps involved. For diving in deeper (Ha! As if. ) refer : [http://www.debian.org/doc/manuals/maint-guide/modify.en.html#quiltrc](http://www.debian.org/doc/manuals/maint-guide/modify.en.html#quiltrc) (Didn't help me much. )

Also there are some standards we ought to follow when we are creating a patch, so that everyone can understand it's purpose, author etc. The one I followed is DEP-3 and find more about it here: [http://dep.debian.net/deps/dep3/](http://dep.debian.net/deps/dep3/) . It involves just some simple steps when we add some line in the beginning of our patch file like - Description, Author, Forwarded, Date modified, etc.

And do not forget to let git know all the changes you've made, if you are using git.
