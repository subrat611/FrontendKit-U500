# Prgoress Bar

> NOTE:
> Using width vs transform for animating elements in CSS can have significant performance implications.
> Here's a brief comparison:

### Width

- Repaint and Reflow:

Changing the width property triggers both repaint and reflow. This means the browser has to recalculate the layout of the entire page and then repaint the affected parts. This can be expensive in terms of performance, especially for complex layouts or frequent updates.

- Glitch Effect:

Due to the frequent recalculations and repaints, animations using width can appear glitchy or stutter, especially on lower-end devices or when there are many elements being animated simultaneously.

### Transform

- Only Repaint:

Changing the transform property (e.g., translateX, scale, rotate) only triggers a repaint, not a reflow. This is because transforms are handled by the GPU, which can handle these operations more efficiently.

- Smooth Animations:

Animations using transform are generally smoother and more performant because they avoid the costly reflow process. The GPU can handle these changes more efficiently, resulting in smoother animations.
