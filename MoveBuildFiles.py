import os
import shutil
import sys
import platform

#os.chdir("/react/")
#os.system("npm build")

#change default directory to current directory
def _move():
    if os.path.isdir("static"):
        shutil.rmtree("static")
    #define src and dest filepath
    buildFolder = "build/" #srcFolder
    #destfolder is current folder

    fileList = os.listdir(buildFolder)

    for file in fileList:
        #sys.stdout.write("\rCopy file: {}                                               ".format(file))
        print("Copy file: {}".format(file))
        shutil.move(buildFolder + file, file)
    
    shutil.rmtree(buildFolder)
    print("\nfinished")


if platform.system() == 'Linux':
    if os.getlogin() == 'vpt' or os.getlogin() == 'pi':
        os.chdir('/home/'+os.getlogin()+'/website/')
        _move()
    else:
        print("Not defined user")

elif platform.system() == 'Windows':
    if os.getlogin() == 'MS-23':
        os.chdir(r"C:\Users\MS-23\Documents\Feuerwehr\Homepage")
        _move()
else:
    print("Something goes wrong.\nMaybe the false system with the false user.")
    sys.exit()