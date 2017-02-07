# set-game
Calculates all cards and all possible sets, embarrassingly brute force.

Each integer in the card array holds the four different properties of each card:
Color, Shape, Filling, and Number of shapes. Each property can have one of three values:
* Color : 0 = Red, 1: Green, 2: Blue
* Shape : 0 = Diamond, 1: Ellipse, 2: Squiggly
* Filling: 0 = Blank, 1: Shaded, 2: Full
* Number: 0 = One, 1: Two, 2: Three

In binary this is represented in four groups of two bits, so one card is
made up of 8 bits, for example like this 10 01 10 00.

To check if a set is a valid set, each group of two bits 
are compared to check if they are all equal or all different.



