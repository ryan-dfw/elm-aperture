a homepage for photography group Elm Aperture.

As i'd like this site to be quickly editable and updatable by any photographer using it, whether or not they're used to Typescript themselves, i've pursued a three-layered approach between data entry and rendering.

At one end is the general arrangement of components on the screen. Though built as a one-page React applicaiton, the URL will be amended and updated to mimic multi-page websites, and can be manually pointed and followed as such.

On the other end is a very simple .tsx, containing all the information which might change day-to-day. Here, for a collection of images, we might store metadata such as the directory and subdirectory in two provided constants.
These will both point to the images to be used, as well as be the source from which the target route or URL endpoint assembles the collections.
Beneath this is stored all the relevant metadata for each photo, as an array of strings and numbers. Currently, we have it set up to expect a title, short description, photographer, vertical offset for desktop browsers, and vertical offset for mobile browsers.
A photographer wishing to swap out an image needs only provide the image itself and modify the corresponding line of metadata to match their photo's information.

Finally, the middle layer handles all the logic required in building the component to be mounted. For the lightbox galleries, we have just one component, Lightbox.tsx, handling the build of every lightbox, regardless of subject matter, orientation, or style.
A series of if statements and conditional renderings will build a different lightbox based on relevant props from the dataset.
This is to ensure ease of use and updatability, as well as promote seperation of concerns.

Here, i as the programmer might concern myself with the workings of the rendering layer.
I, or preferably a more skilled specialist, as the designer, may work in other components to arrange the elements shown on the page.
Finally, any photographer may simply provide photos and edit arrays' contents on the data layer as simply as taking notes in Notepad.
