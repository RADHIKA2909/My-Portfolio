export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,           // At what position will the text be placed at when it is hidden
        opacity: 0,       // It'll not sho up at that hidden position since opacity is 0. If you want to check where it is you put opacity: 1 and add some delayy
      },
      show: {
        y: 0,             // After the delay, it shows up with the opacity written at this y from its initial posn (here its 0 means it'll come on its original position specified in style)
        opacity: 1,
        transition: {
          type: "spring",       // This is the animation type which will create a smooth, elastic-like motion
          duration: 1.25,       // Showing up process will take 1.25 sec
          delay: delay,         // If we are not passing any delay numer, then that means no delay will e there and animation will e applied as soon as pg loads
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };