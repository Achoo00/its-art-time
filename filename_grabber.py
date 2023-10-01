import os

# asked chat gpt to improve my other code and got this
def find_images(path):
    # walk through the path and all its subdirectories
    # dirpath is path to directory
    # dirnames is list of names of subdirectories in dirpath
    # filenames is list of names of non-directory files in dirpath
    for root, dirs, files in os.walk(path):
        # loop through the files in the current directory
        for file in files:
            # check if the file contains 'png'
            if 'png' in file:
                # get the full path of the file
                file_path = os.path.join(root, file)
                print(file)
            elif 'jpeg' in file:
                # get the full path of the file
                file_path = os.path.join(root, file)
                print(file)
            elif 'gif' in file:
                # get the full path of the file
                file_path = os.path.join(root, file)
                print(file)
            elif 'jpg' in file:
                # get the full path of the file
                file_path = os.path.join(root, file)
                print(file)
                

# assign a string value to a variable called path that represents a directory on the D drive
path = "C://Users//amaha//VS_HTML_Projects//drawing_git//its-art-time//images"

# call the delete_files function with the path variable as an argument
if __name__ == '__main__':
    find_images(path)
