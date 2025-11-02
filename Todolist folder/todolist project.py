from tkinter import *
import tkinter as tk 
from tkinter import messagebox
from tkinter import colorchooser

def clear_all():
     for widget in frame1.winfo_children():
          widget.destroy()


root = Tk() # a variable that stores the window 
root.geometry("400x400")
root.title("Python note app") # title for the window #

def frame_colour_change():
     fr_colour = colorchooser.askcolor()[1]
     frame1.config(bg = fr_colour)


def background_colour_change():
     bg_colour = colorchooser.askcolor()[1]
     root.config(bg = bg_colour)

def default_colour():
     root.configure(bg= "#f0f0f0")
     frame1.configure(bg= "#f0f0f0")
     

frame1 = Frame(root, width=200, height = 200, borderwidth = 10, relief = tk.RIDGE) # relief makes the border visible RIDGE is the type of border colour/design
frame1.grid()
#frame1.grid_propagate(False) # to keep the frame from changing sizes


lb1 = Label(root, text="PyNotes")

lb1.config(font=("Helvetica bold", 26))


para = Label(root, text= "You can use the entry box below to enter notes. The notes will then be shown on the frame on the top left")
para1 = Label(root, text= "Use the enter key to add notes onto the frame")

para.config(font= ("Helvetica", 12))
para1.config(font=("helvetica", 13))

para.place(relx = 0.5, rely = 0.2, anchor = "center" )
para1.place(relx =0.5, rely = 0.3, anchor = "center")
lb1.place(relx = 0.5, rely = 0.10, anchor = "center")


def delete_note():
        lb2.destroy() 
       

notes = []

def data_entry(event):
    global lb2 
    global data1 # making data1 a global variable to access it outside of the data entry function 
    data1 = task.get() # Returns the entrys current text as a string 
    lb2 = Label(frame1, text = data1, font= "bold") 
    notes.append(data1)
    print(notes)
    lb2.grid()

   
# Creating entry feild 

task = Entry(root, width=50)
task.grid()
task.place(relx = .5, rely = .4, anchor = "center")


def delete_entry():
    task.delete(0, "end")

lb2 = Label(root) # stores the label 
lb2.grid()

# Saves notes in the text file(Only saves one note at a time )
def save_notes():
          if notes:
                with open("Form_submit.txt", "w") as file:
                     file.writelines(str(notes))
                     messagebox.showinfo("Note saved", "Your Note has been saved to Form_submit.txt")
          else:
               messagebox.showerror("Error", "Theres nothing here bro")

     
# Actually making the buttons
# The enter key seems more intuitive so I went with that instead of the add note button


#binding the enter key to the root window

root.bind("<Return>", data_entry)

Button(root, text="Clear entry", command = delete_entry).place(relx = .5, rely = .5, anchor = "center")

# Button to Clear note
Button(root, text="Clear all notes", command = clear_all,).place(relx = .5, rely = .6, anchor = "center")

Button(root, text="Delete last note", command = delete_note ).place(relx = .5 , rely = .7, anchor = "center")

Button(root, text="Pick a background colour", command = background_colour_change).place(relx= .15, rely = .28)

Button(root, text="Reset bg colour", command = default_colour).place(relx = .5 , rely = .80, anchor = "center")

Button(root, text= "Save notes", command = save_notes).place(relx= .15, rely = .20)

Button(root, text= "Pick a Frame colour", command = frame_colour_change).place(relx= .15, rely = .24)


root.mainloop() # a function to keep the window open  




