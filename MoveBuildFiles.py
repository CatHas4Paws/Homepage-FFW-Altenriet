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


_move()
