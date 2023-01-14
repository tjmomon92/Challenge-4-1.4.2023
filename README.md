# <Interactive Work Day Scheduler>

## Description

This project was based around creating script for an easy-to-read, color-coded work day scheduler focused on ease-of-use and functionality. This application functions through the use of local storage to record and save time-sensitive items such as meetings, tasks, and appointments that can be easily reviewed by an employee. Another note-worthy function is the use of color to easily show past, current, and future items for easy and fast review. My goal is for this project to ease the burden of keeping oneself organized in a fast-paced work environment that demands quick turn-around on deadlines. The use of local storage in this application enables an employee to make quick additions to their workday without the fear of losing important task information upon a window refresh. This project was an excellent learning experience, as I not only got practice in using JavaScript, but also got to experiment and play with the versatility of jQuery. I have learned a lot about the different ways that a developer can utilize local storage to meet different requirements, as well as new jQuery syntax to keep my code clean and organized. 

## Installation

This application operates entirely in your browser; no installation required for use!

## Usage

In this application, the use of Grey, Red, and Green has been used to denote past time slots, the current timeslot, respectively:
  ![Screenshot-ColorDemo](https://user-images.githubusercontent.com/118149929/212490193-d205d7da-593a-4191-b327-31ff8c9399f3.png)

Once the Work Day Scheduler has been opened in your browser, to save task data to a specific timeslot, simply locate the desired timeslot, enter your task, and hit the save button on the right-hand side of the screen. This will save your inputted task to Local Storage.
  ![Screenshot-UserInput](https://user-images.githubusercontent.com/118149929/212490217-2d6a81a6-ed87-4fb5-a991-b592098359d9.png)

To verify that your desired input has been successfully saved, open this application in Google Chrome, right-click on the page, and select "Inspect".
  ![Screenshot-VerifySavedInputStep#1](https://user-images.githubusercontent.com/118149929/212490234-a7ddfcf0-14fe-4964-a5fb-3eee2d72031e.png)

This will open your Google Chrome Dev Tools. Once opened, click on the ">>" dropdown menu, and select "Applications".
  ![Screenshot-VerifySavedInputStep#2](https://user-images.githubusercontent.com/118149929/212490253-d6761375-9dd1-4c60-8a18-01cb7e1da179.png)

On the left-side of your dev tools, make sure that the "file:///" option is selected under the "Local Storage" down that is directly under the "Storage" section. Your user input will appear on the right-side of your dev tools, giving your inputted "Value" a unique identifier or "Key".
  ![Screenshot-VerifySavedInputStep#3](https://user-images.githubusercontent.com/118149929/212490277-bb5709c8-46e5-4850-b95f-b04d9cefe93e.png)

If your refresh the page or navigate back to this page, your task data will still be available upon page load. To replace an entry, simply re-save a new input in your desired timeslot. To delete all curent entries, navigate back to your Local Storage as stated above, and hit the prohibition emblem that apears above your "Key" and "Value" sections (This is the circle with the slash through it!).

## Credits

I would like to give a massive shoutout to tutor Faran Navazi for his help in expanding my knowledge of versatile jQuery syntax. 
