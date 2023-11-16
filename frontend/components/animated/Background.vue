<template>
    <div>    
        <div v-for="index in 30" :key="index" class="firefly"></div>
    </div>
</template>

<style lang="scss" scoped>
.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: -10vw;
}
.firefly::before {
  background: black;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
  box-shadow: 0 0 0vw 0vw yellow;
  animation: drift ease alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 12s;
}
.firefly:nth-child(1)::after {
  animation-duration: 12s, 8359ms;
  animation-delay: 0ms, 4051ms;
}

@keyframes move1 {
  0% {
    transform: translateX(47vw) translateY(-35vh) scale(0.7);
  }
  5% {
    transform: translateX(-30vw) translateY(-33vh) scale(0.3);
  }
  10% {
    transform: translateX(-33vw) translateY(31vh) scale(0.33);
  }
  15% {
    transform: translateX(-1vw) translateY(-10vh) scale(0.93);
  }
  20% {
    transform: translateX(-1vw) translateY(29vh) scale(0.34);
  }
  25% {
    transform: translateX(-48vw) translateY(28vh) scale(0.59);
  }
  30% {
    transform: translateX(-6vw) translateY(42vh) scale(0.32);
  }
  35% {
    transform: translateX(19vw) translateY(-30vh) scale(0.79);
  }
  40% {
    transform: translateX(-42vw) translateY(40vh) scale(0.56);
  }
  45% {
    transform: translateX(-19vw) translateY(8vh) scale(0.9);
  }
  50% {
    transform: translateX(-49vw) translateY(38vh) scale(0.67);
  }
  55% {
    transform: translateX(-47vw) translateY(49vh) scale(1);
  }
  60% {
    transform: translateX(32vw) translateY(25vh) scale(0.71);
  }
  65% {
    transform: translateX(38vw) translateY(-30vh) scale(0.76);
  }
  70% {
    transform: translateX(32vw) translateY(-33vh) scale(0.9);
  }
  75% {
    transform: translateX(20vw) translateY(41vh) scale(0.49);
  }
  80% {
    transform: translateX(18vw) translateY(-39vh) scale(0.53);
  }
  85% {
    transform: translateX(15vw) translateY(-28vh) scale(0.61);
  }
  90% {
    transform: translateX(21vw) translateY(12vh) scale(0.62);
  }
  95% {
    transform: translateX(-45vw) translateY(6vh) scale(0.45);
  }
  100% {
    transform: translateX(5vw) translateY(-2vh) scale(0.64);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 11s;
}
.firefly:nth-child(2)::after {
  animation-duration: 11s, 6230ms;
  animation-delay: 0ms, 3479ms;
}

@keyframes move2 {
  0% {
    transform: translateX(49vw) translateY(1vh) scale(0.26);
  }
  4% {
    transform: translateX(-49vw) translateY(-15vh) scale(0.3);
  }
  8% {
    transform: translateX(45vw) translateY(24vh) scale(0.68);
  }
  12% {
    transform: translateX(-28vw) translateY(37vh) scale(0.48);
  }
  16% {
    transform: translateX(2vw) translateY(-24vh) scale(0.72);
  }
  20% {
    transform: translateX(-21vw) translateY(38vh) scale(0.66);
  }
  24% {
    transform: translateX(-43vw) translateY(46vh) scale(0.44);
  }
  28% {
    transform: translateX(-40vw) translateY(3vh) scale(0.79);
  }
  32% {
    transform: translateX(43vw) translateY(45vh) scale(0.48);
  }
  36% {
    transform: translateX(6vw) translateY(3vh) scale(0.96);
  }
  40% {
    transform: translateX(-12vw) translateY(-29vh) scale(0.84);
  }
  44% {
    transform: translateX(37vw) translateY(32vh) scale(0.49);
  }
  48% {
    transform: translateX(25vw) translateY(37vh) scale(0.85);
  }
  52% {
    transform: translateX(-28vw) translateY(43vh) scale(0.94);
  }
  56% {
    transform: translateX(23vw) translateY(-19vh) scale(0.35);
  }
  60% {
    transform: translateX(-38vw) translateY(-3vh) scale(0.44);
  }
  64% {
    transform: translateX(23vw) translateY(-38vh) scale(0.88);
  }
  68% {
    transform: translateX(-17vw) translateY(48vh) scale(0.26);
  }
  72% {
    transform: translateX(-42vw) translateY(-15vh) scale(0.95);
  }
  76% {
    transform: translateX(-9vw) translateY(19vh) scale(0.52);
  }
  80% {
    transform: translateX(-19vw) translateY(29vh) scale(0.96);
  }
  84% {
    transform: translateX(9vw) translateY(14vh) scale(0.34);
  }
  88% {
    transform: translateX(15vw) translateY(1vh) scale(0.59);
  }
  92% {
    transform: translateX(-25vw) translateY(-47vh) scale(0.3);
  }
  96% {
    transform: translateX(-18vw) translateY(-12vh) scale(0.76);
  }
  100% {
    transform: translateX(25vw) translateY(-45vh) scale(0.9);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 18s;
}
.firefly:nth-child(3)::after {
  animation-duration: 18s, 5595ms;
  animation-delay: 0ms, 575ms;
}

@keyframes move3 {
  0% {
    transform: translateX(-2vw) translateY(0vh) scale(0.75);
  }
  5% {
    transform: translateX(22vw) translateY(14vh) scale(0.81);
  }
  10% {
    transform: translateX(4vw) translateY(6vh) scale(0.46);
  }
  15% {
    transform: translateX(5vw) translateY(-36vh) scale(0.38);
  }
  20% {
    transform: translateX(-34vw) translateY(-5vh) scale(0.33);
  }
  25% {
    transform: translateX(-23vw) translateY(-17vh) scale(0.32);
  }
  30% {
    transform: translateX(45vw) translateY(50vh) scale(0.87);
  }
  35% {
    transform: translateX(33vw) translateY(-5vh) scale(0.75);
  }
  40% {
    transform: translateX(-32vw) translateY(-5vh) scale(0.79);
  }
  45% {
    transform: translateX(-39vw) translateY(-28vh) scale(0.49);
  }
  50% {
    transform: translateX(50vw) translateY(-18vh) scale(0.86);
  }
  55% {
    transform: translateX(5vw) translateY(12vh) scale(0.38);
  }
  60% {
    transform: translateX(37vw) translateY(24vh) scale(0.64);
  }
  65% {
    transform: translateX(23vw) translateY(26vh) scale(0.57);
  }
  70% {
    transform: translateX(-20vw) translateY(-46vh) scale(0.67);
  }
  75% {
    transform: translateX(-20vw) translateY(-48vh) scale(0.66);
  }
  80% {
    transform: translateX(12vw) translateY(-5vh) scale(0.96);
  }
  85% {
    transform: translateX(13vw) translateY(49vh) scale(0.87);
  }
  90% {
    transform: translateX(-42vw) translateY(20vh) scale(0.68);
  }
  95% {
    transform: translateX(40vw) translateY(3vh) scale(0.95);
  }
  100% {
    transform: translateX(13vw) translateY(-44vh) scale(0.3);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 9s;
}
.firefly:nth-child(4)::after {
  animation-duration: 9s, 7002ms;
  animation-delay: 0ms, 582ms;
}

@keyframes move4 {
  0% {
    transform: translateX(-23vw) translateY(13vh) scale(0.59);
  }
  3.7037037037% {
    transform: translateX(8vw) translateY(-31vh) scale(0.42);
  }
  7.4074074074% {
    transform: translateX(21vw) translateY(40vh) scale(0.95);
  }
  11.1111111111% {
    transform: translateX(-21vw) translateY(-30vh) scale(0.27);
  }
  14.8148148148% {
    transform: translateX(19vw) translateY(-21vh) scale(0.96);
  }
  18.5185185185% {
    transform: translateX(-29vw) translateY(32vh) scale(0.92);
  }
  22.2222222222% {
    transform: translateX(-34vw) translateY(9vh) scale(0.38);
  }
  25.9259259259% {
    transform: translateX(9vw) translateY(12vh) scale(0.99);
  }
  29.6296296296% {
    transform: translateX(-34vw) translateY(-43vh) scale(0.89);
  }
  33.3333333333% {
    transform: translateX(21vw) translateY(-24vh) scale(0.97);
  }
  37.037037037% {
    transform: translateX(50vw) translateY(14vh) scale(0.69);
  }
  40.7407407407% {
    transform: translateX(33vw) translateY(44vh) scale(0.42);
  }
  44.4444444444% {
    transform: translateX(-32vw) translateY(50vh) scale(0.71);
  }
  48.1481481481% {
    transform: translateX(-38vw) translateY(47vh) scale(0.3);
  }
  51.8518518519% {
    transform: translateX(1vw) translateY(29vh) scale(0.77);
  }
  55.5555555556% {
    transform: translateX(23vw) translateY(-42vh) scale(0.48);
  }
  59.2592592593% {
    transform: translateX(26vw) translateY(13vh) scale(0.61);
  }
  62.962962963% {
    transform: translateX(19vw) translateY(7vh) scale(0.95);
  }
  66.6666666667% {
    transform: translateX(-30vw) translateY(-1vh) scale(0.52);
  }
  70.3703703704% {
    transform: translateX(-30vw) translateY(-19vh) scale(0.94);
  }
  74.0740740741% {
    transform: translateX(37vw) translateY(-30vh) scale(0.35);
  }
  77.7777777778% {
    transform: translateX(7vw) translateY(-24vh) scale(0.48);
  }
  81.4814814815% {
    transform: translateX(-12vw) translateY(-39vh) scale(0.81);
  }
  85.1851851852% {
    transform: translateX(-31vw) translateY(-32vh) scale(0.82);
  }
  88.8888888889% {
    transform: translateX(47vw) translateY(16vh) scale(0.87);
  }
  92.5925925926% {
    transform: translateX(43vw) translateY(-28vh) scale(0.71);
  }
  96.2962962963% {
    transform: translateX(-29vw) translateY(14vh) scale(0.93);
  }
  100% {
    transform: translateX(13vw) translateY(-44vh) scale(0.27);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 12s;
}
.firefly:nth-child(5)::after {
  animation-duration: 12s, 8193ms;
  animation-delay: 0ms, 2577ms;
}

@keyframes move5 {
  0% {
    transform: translateX(19vw) translateY(-42vh) scale(0.61);
  }
  3.8461538462% {
    transform: translateX(-5vw) translateY(-39vh) scale(0.68);
  }
  7.6923076923% {
    transform: translateX(6vw) translateY(47vh) scale(0.45);
  }
  11.5384615385% {
    transform: translateX(-26vw) translateY(44vh) scale(0.99);
  }
  15.3846153846% {
    transform: translateX(27vw) translateY(5vh) scale(0.34);
  }
  19.2307692308% {
    transform: translateX(-31vw) translateY(45vh) scale(0.51);
  }
  23.0769230769% {
    transform: translateX(5vw) translateY(6vh) scale(0.7);
  }
  26.9230769231% {
    transform: translateX(-4vw) translateY(-2vh) scale(0.52);
  }
  30.7692307692% {
    transform: translateX(-17vw) translateY(-16vh) scale(0.67);
  }
  34.6153846154% {
    transform: translateX(29vw) translateY(-47vh) scale(0.3);
  }
  38.4615384615% {
    transform: translateX(14vw) translateY(12vh) scale(0.84);
  }
  42.3076923077% {
    transform: translateX(-48vw) translateY(12vh) scale(0.61);
  }
  46.1538461538% {
    transform: translateX(23vw) translateY(40vh) scale(0.43);
  }
  50% {
    transform: translateX(20vw) translateY(-22vh) scale(0.83);
  }
  53.8461538462% {
    transform: translateX(0vw) translateY(-4vh) scale(0.69);
  }
  57.6923076923% {
    transform: translateX(12vw) translateY(43vh) scale(0.48);
  }
  61.5384615385% {
    transform: translateX(-15vw) translateY(-16vh) scale(0.55);
  }
  65.3846153846% {
    transform: translateX(-22vw) translateY(49vh) scale(0.58);
  }
  69.2307692308% {
    transform: translateX(43vw) translateY(45vh) scale(0.68);
  }
  73.0769230769% {
    transform: translateX(-9vw) translateY(34vh) scale(0.71);
  }
  76.9230769231% {
    transform: translateX(38vw) translateY(46vh) scale(0.45);
  }
  80.7692307692% {
    transform: translateX(27vw) translateY(17vh) scale(0.36);
  }
  84.6153846154% {
    transform: translateX(15vw) translateY(-17vh) scale(0.41);
  }
  88.4615384615% {
    transform: translateX(49vw) translateY(-38vh) scale(1);
  }
  92.3076923077% {
    transform: translateX(44vw) translateY(-25vh) scale(0.88);
  }
  96.1538461538% {
    transform: translateX(4vw) translateY(22vh) scale(0.8);
  }
  100% {
    transform: translateX(28vw) translateY(11vh) scale(0.59);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 9s;
}
.firefly:nth-child(6)::after {
  animation-duration: 9s, 9679ms;
  animation-delay: 0ms, 6502ms;
}

@keyframes move6 {
  0% {
    transform: translateX(34vw) translateY(44vh) scale(0.88);
  }
  5% {
    transform: translateX(0vw) translateY(-44vh) scale(0.46);
  }
  10% {
    transform: translateX(-14vw) translateY(8vh) scale(0.56);
  }
  15% {
    transform: translateX(-46vw) translateY(1vh) scale(0.33);
  }
  20% {
    transform: translateX(18vw) translateY(44vh) scale(0.81);
  }
  25% {
    transform: translateX(10vw) translateY(32vh) scale(0.58);
  }
  30% {
    transform: translateX(48vw) translateY(21vh) scale(0.72);
  }
  35% {
    transform: translateX(24vw) translateY(36vh) scale(0.52);
  }
  40% {
    transform: translateX(-21vw) translateY(49vh) scale(0.83);
  }
  45% {
    transform: translateX(-11vw) translateY(40vh) scale(0.9);
  }
  50% {
    transform: translateX(40vw) translateY(13vh) scale(0.95);
  }
  55% {
    transform: translateX(0vw) translateY(17vh) scale(0.32);
  }
  60% {
    transform: translateX(30vw) translateY(-12vh) scale(0.27);
  }
  65% {
    transform: translateX(14vw) translateY(-4vh) scale(0.29);
  }
  70% {
    transform: translateX(-11vw) translateY(-36vh) scale(0.58);
  }
  75% {
    transform: translateX(8vw) translateY(24vh) scale(0.57);
  }
  80% {
    transform: translateX(-36vw) translateY(-34vh) scale(0.28);
  }
  85% {
    transform: translateX(9vw) translateY(-41vh) scale(0.28);
  }
  90% {
    transform: translateX(9vw) translateY(-5vh) scale(0.52);
  }
  95% {
    transform: translateX(32vw) translateY(-42vh) scale(0.42);
  }
  100% {
    transform: translateX(49vw) translateY(-1vh) scale(0.49);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 17s;
}
.firefly:nth-child(7)::after {
  animation-duration: 17s, 5272ms;
  animation-delay: 0ms, 6718ms;
}

@keyframes move7 {
  0% {
    transform: translateX(-40vw) translateY(-2vh) scale(0.83);
  }
  5% {
    transform: translateX(-6vw) translateY(-31vh) scale(0.83);
  }
  10% {
    transform: translateX(-47vw) translateY(-42vh) scale(0.82);
  }
  15% {
    transform: translateX(43vw) translateY(36vh) scale(0.96);
  }
  20% {
    transform: translateX(-5vw) translateY(0vh) scale(0.36);
  }
  25% {
    transform: translateX(37vw) translateY(15vh) scale(0.89);
  }
  30% {
    transform: translateX(-41vw) translateY(49vh) scale(0.89);
  }
  35% {
    transform: translateX(12vw) translateY(-14vh) scale(0.58);
  }
  40% {
    transform: translateX(-1vw) translateY(13vh) scale(0.74);
  }
  45% {
    transform: translateX(-34vw) translateY(35vh) scale(0.7);
  }
  50% {
    transform: translateX(-18vw) translateY(-29vh) scale(0.47);
  }
  55% {
    transform: translateX(35vw) translateY(32vh) scale(0.88);
  }
  60% {
    transform: translateX(35vw) translateY(4vh) scale(0.31);
  }
  65% {
    transform: translateX(-32vw) translateY(-3vh) scale(0.89);
  }
  70% {
    transform: translateX(-14vw) translateY(15vh) scale(0.5);
  }
  75% {
    transform: translateX(25vw) translateY(-48vh) scale(0.53);
  }
  80% {
    transform: translateX(-14vw) translateY(41vh) scale(0.96);
  }
  85% {
    transform: translateX(-42vw) translateY(11vh) scale(0.92);
  }
  90% {
    transform: translateX(-46vw) translateY(-6vh) scale(0.65);
  }
  95% {
    transform: translateX(22vw) translateY(-5vh) scale(0.57);
  }
  100% {
    transform: translateX(-27vw) translateY(5vh) scale(0.66);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 10s;
}
.firefly:nth-child(8)::after {
  animation-duration: 10s, 7876ms;
  animation-delay: 0ms, 2712ms;
}

@keyframes move8 {
  0% {
    transform: translateX(-36vw) translateY(45vh) scale(0.79);
  }
  3.7037037037% {
    transform: translateX(19vw) translateY(39vh) scale(0.77);
  }
  7.4074074074% {
    transform: translateX(-24vw) translateY(12vh) scale(0.3);
  }
  11.1111111111% {
    transform: translateX(-16vw) translateY(-13vh) scale(0.75);
  }
  14.8148148148% {
    transform: translateX(-14vw) translateY(21vh) scale(0.53);
  }
  18.5185185185% {
    transform: translateX(32vw) translateY(48vh) scale(0.26);
  }
  22.2222222222% {
    transform: translateX(-11vw) translateY(-25vh) scale(0.47);
  }
  25.9259259259% {
    transform: translateX(9vw) translateY(-30vh) scale(0.36);
  }
  29.6296296296% {
    transform: translateX(-49vw) translateY(4vh) scale(0.39);
  }
  33.3333333333% {
    transform: translateX(-25vw) translateY(-4vh) scale(0.54);
  }
  37.037037037% {
    transform: translateX(48vw) translateY(30vh) scale(0.87);
  }
  40.7407407407% {
    transform: translateX(-28vw) translateY(-47vh) scale(0.84);
  }
  44.4444444444% {
    transform: translateX(10vw) translateY(50vh) scale(0.58);
  }
  48.1481481481% {
    transform: translateX(-8vw) translateY(-20vh) scale(0.58);
  }
  51.8518518519% {
    transform: translateX(-27vw) translateY(-11vh) scale(0.36);
  }
  55.5555555556% {
    transform: translateX(-31vw) translateY(10vh) scale(0.73);
  }
  59.2592592593% {
    transform: translateX(10vw) translateY(48vh) scale(0.27);
  }
  62.962962963% {
    transform: translateX(27vw) translateY(38vh) scale(0.37);
  }
  66.6666666667% {
    transform: translateX(-13vw) translateY(-9vh) scale(0.35);
  }
  70.3703703704% {
    transform: translateX(-45vw) translateY(35vh) scale(0.31);
  }
  74.0740740741% {
    transform: translateX(4vw) translateY(-28vh) scale(1);
  }
  77.7777777778% {
    transform: translateX(-40vw) translateY(27vh) scale(0.54);
  }
  81.4814814815% {
    transform: translateX(-7vw) translateY(37vh) scale(0.35);
  }
  85.1851851852% {
    transform: translateX(-22vw) translateY(7vh) scale(0.4);
  }
  88.8888888889% {
    transform: translateX(11vw) translateY(29vh) scale(0.56);
  }
  92.5925925926% {
    transform: translateX(-33vw) translateY(26vh) scale(0.91);
  }
  96.2962962963% {
    transform: translateX(45vw) translateY(-40vh) scale(0.89);
  }
  100% {
    transform: translateX(-3vw) translateY(18vh) scale(0.66);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 13s;
}
.firefly:nth-child(9)::after {
  animation-duration: 13s, 6341ms;
  animation-delay: 0ms, 4469ms;
}

@keyframes move9 {
  0% {
    transform: translateX(48vw) translateY(-3vh) scale(0.54);
  }
  4.347826087% {
    transform: translateX(7vw) translateY(15vh) scale(0.47);
  }
  8.6956521739% {
    transform: translateX(13vw) translateY(1vh) scale(0.97);
  }
  13.0434782609% {
    transform: translateX(-19vw) translateY(43vh) scale(0.87);
  }
  17.3913043478% {
    transform: translateX(-45vw) translateY(47vh) scale(0.32);
  }
  21.7391304348% {
    transform: translateX(-25vw) translateY(19vh) scale(0.9);
  }
  26.0869565217% {
    transform: translateX(28vw) translateY(-45vh) scale(0.9);
  }
  30.4347826087% {
    transform: translateX(-22vw) translateY(-20vh) scale(0.7);
  }
  34.7826086957% {
    transform: translateX(-21vw) translateY(-41vh) scale(0.35);
  }
  39.1304347826% {
    transform: translateX(9vw) translateY(19vh) scale(0.94);
  }
  43.4782608696% {
    transform: translateX(21vw) translateY(6vh) scale(0.97);
  }
  47.8260869565% {
    transform: translateX(-40vw) translateY(13vh) scale(0.61);
  }
  52.1739130435% {
    transform: translateX(-23vw) translateY(-49vh) scale(0.68);
  }
  56.5217391304% {
    transform: translateX(-48vw) translateY(8vh) scale(0.82);
  }
  60.8695652174% {
    transform: translateX(25vw) translateY(31vh) scale(0.29);
  }
  65.2173913043% {
    transform: translateX(-43vw) translateY(28vh) scale(0.5);
  }
  69.5652173913% {
    transform: translateX(23vw) translateY(46vh) scale(0.62);
  }
  73.9130434783% {
    transform: translateX(-5vw) translateY(-28vh) scale(0.52);
  }
  78.2608695652% {
    transform: translateX(24vw) translateY(26vh) scale(0.87);
  }
  82.6086956522% {
    transform: translateX(-25vw) translateY(29vh) scale(0.58);
  }
  86.9565217391% {
    transform: translateX(-8vw) translateY(6vh) scale(0.95);
  }
  91.3043478261% {
    transform: translateX(-34vw) translateY(22vh) scale(0.31);
  }
  95.652173913% {
    transform: translateX(4vw) translateY(21vh) scale(0.78);
  }
  100% {
    transform: translateX(26vw) translateY(-27vh) scale(0.5);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 15s;
}
.firefly:nth-child(10)::after {
  animation-duration: 15s, 7922ms;
  animation-delay: 0ms, 4163ms;
}

@keyframes move10 {
  0% {
    transform: translateX(48vw) translateY(-6vh) scale(0.83);
  }
  3.5714285714% {
    transform: translateX(-20vw) translateY(1vh) scale(0.46);
  }
  7.1428571429% {
    transform: translateX(2vw) translateY(-17vh) scale(0.89);
  }
  10.7142857143% {
    transform: translateX(13vw) translateY(-14vh) scale(0.89);
  }
  14.2857142857% {
    transform: translateX(0vw) translateY(5vh) scale(0.85);
  }
  17.8571428571% {
    transform: translateX(38vw) translateY(44vh) scale(0.77);
  }
  21.4285714286% {
    transform: translateX(1vw) translateY(-43vh) scale(0.74);
  }
  25% {
    transform: translateX(-28vw) translateY(-47vh) scale(0.59);
  }
  28.5714285714% {
    transform: translateX(-13vw) translateY(10vh) scale(0.55);
  }
  32.1428571429% {
    transform: translateX(4vw) translateY(34vh) scale(0.62);
  }
  35.7142857143% {
    transform: translateX(-14vw) translateY(-34vh) scale(0.6);
  }
  39.2857142857% {
    transform: translateX(16vw) translateY(40vh) scale(0.87);
  }
  42.8571428571% {
    transform: translateX(-47vw) translateY(-21vh) scale(0.84);
  }
  46.4285714286% {
    transform: translateX(-36vw) translateY(42vh) scale(0.51);
  }
  50% {
    transform: translateX(36vw) translateY(3vh) scale(0.27);
  }
  53.5714285714% {
    transform: translateX(35vw) translateY(-19vh) scale(0.39);
  }
  57.1428571429% {
    transform: translateX(-4vw) translateY(7vh) scale(0.86);
  }
  60.7142857143% {
    transform: translateX(-4vw) translateY(-22vh) scale(0.79);
  }
  64.2857142857% {
    transform: translateX(-25vw) translateY(-32vh) scale(0.99);
  }
  67.8571428571% {
    transform: translateX(31vw) translateY(37vh) scale(0.31);
  }
  71.4285714286% {
    transform: translateX(-10vw) translateY(-33vh) scale(0.87);
  }
  75% {
    transform: translateX(7vw) translateY(42vh) scale(0.56);
  }
  78.5714285714% {
    transform: translateX(23vw) translateY(42vh) scale(0.43);
  }
  82.1428571429% {
    transform: translateX(-25vw) translateY(-38vh) scale(0.35);
  }
  85.7142857143% {
    transform: translateX(48vw) translateY(-13vh) scale(0.64);
  }
  89.2857142857% {
    transform: translateX(0vw) translateY(23vh) scale(0.93);
  }
  92.8571428571% {
    transform: translateX(-33vw) translateY(14vh) scale(0.61);
  }
  96.4285714286% {
    transform: translateX(2vw) translateY(29vh) scale(0.54);
  }
  100% {
    transform: translateX(0vw) translateY(-17vh) scale(0.62);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 17s;
}
.firefly:nth-child(11)::after {
  animation-duration: 17s, 10261ms;
  animation-delay: 0ms, 7148ms;
}

@keyframes move11 {
  0% {
    transform: translateX(-41vw) translateY(-25vh) scale(0.5);
  }
  4.5454545455% {
    transform: translateX(-39vw) translateY(39vh) scale(0.41);
  }
  9.0909090909% {
    transform: translateX(-49vw) translateY(23vh) scale(0.45);
  }
  13.6363636364% {
    transform: translateX(40vw) translateY(-49vh) scale(0.8);
  }
  18.1818181818% {
    transform: translateX(-36vw) translateY(31vh) scale(0.44);
  }
  22.7272727273% {
    transform: translateX(-12vw) translateY(-15vh) scale(0.33);
  }
  27.2727272727% {
    transform: translateX(33vw) translateY(47vh) scale(0.7);
  }
  31.8181818182% {
    transform: translateX(15vw) translateY(-31vh) scale(0.97);
  }
  36.3636363636% {
    transform: translateX(28vw) translateY(0vh) scale(0.57);
  }
  40.9090909091% {
    transform: translateX(0vw) translateY(4vh) scale(0.63);
  }
  45.4545454545% {
    transform: translateX(22vw) translateY(11vh) scale(0.45);
  }
  50% {
    transform: translateX(-24vw) translateY(-15vh) scale(0.45);
  }
  54.5454545455% {
    transform: translateX(23vw) translateY(37vh) scale(0.28);
  }
  59.0909090909% {
    transform: translateX(-48vw) translateY(38vh) scale(0.63);
  }
  63.6363636364% {
    transform: translateX(24vw) translateY(-17vh) scale(0.83);
  }
  68.1818181818% {
    transform: translateX(-18vw) translateY(-6vh) scale(0.45);
  }
  72.7272727273% {
    transform: translateX(-8vw) translateY(9vh) scale(0.63);
  }
  77.2727272727% {
    transform: translateX(35vw) translateY(-11vh) scale(0.39);
  }
  81.8181818182% {
    transform: translateX(39vw) translateY(34vh) scale(0.87);
  }
  86.3636363636% {
    transform: translateX(-46vw) translateY(2vh) scale(0.54);
  }
  90.9090909091% {
    transform: translateX(23vw) translateY(20vh) scale(0.4);
  }
  95.4545454545% {
    transform: translateX(22vw) translateY(2vh) scale(0.81);
  }
  100% {
    transform: translateX(46vw) translateY(-29vh) scale(0.4);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 14s;
}
.firefly:nth-child(12)::after {
  animation-duration: 14s, 7552ms;
  animation-delay: 0ms, 8344ms;
}

@keyframes move12 {
  0% {
    transform: translateX(16vw) translateY(5vh) scale(0.35);
  }
  4.1666666667% {
    transform: translateX(11vw) translateY(5vh) scale(0.8);
  }
  8.3333333333% {
    transform: translateX(-3vw) translateY(-34vh) scale(0.61);
  }
  12.5% {
    transform: translateX(20vw) translateY(20vh) scale(0.95);
  }
  16.6666666667% {
    transform: translateX(20vw) translateY(46vh) scale(0.43);
  }
  20.8333333333% {
    transform: translateX(7vw) translateY(41vh) scale(0.56);
  }
  25% {
    transform: translateX(21vw) translateY(6vh) scale(0.33);
  }
  29.1666666667% {
    transform: translateX(-46vw) translateY(46vh) scale(0.54);
  }
  33.3333333333% {
    transform: translateX(1vw) translateY(25vh) scale(0.43);
  }
  37.5% {
    transform: translateX(11vw) translateY(10vh) scale(0.67);
  }
  41.6666666667% {
    transform: translateX(-42vw) translateY(24vh) scale(0.72);
  }
  45.8333333333% {
    transform: translateX(45vw) translateY(20vh) scale(0.95);
  }
  50% {
    transform: translateX(47vw) translateY(34vh) scale(0.9);
  }
  54.1666666667% {
    transform: translateX(2vw) translateY(-18vh) scale(0.66);
  }
  58.3333333333% {
    transform: translateX(-3vw) translateY(-38vh) scale(0.49);
  }
  62.5% {
    transform: translateX(17vw) translateY(22vh) scale(0.34);
  }
  66.6666666667% {
    transform: translateX(-46vw) translateY(-15vh) scale(0.75);
  }
  70.8333333333% {
    transform: translateX(-31vw) translateY(31vh) scale(0.81);
  }
  75% {
    transform: translateX(-15vw) translateY(40vh) scale(0.45);
  }
  79.1666666667% {
    transform: translateX(0vw) translateY(-3vh) scale(0.44);
  }
  83.3333333333% {
    transform: translateX(-11vw) translateY(34vh) scale(0.6);
  }
  87.5% {
    transform: translateX(43vw) translateY(47vh) scale(0.79);
  }
  91.6666666667% {
    transform: translateX(-29vw) translateY(-6vh) scale(0.34);
  }
  95.8333333333% {
    transform: translateX(27vw) translateY(-5vh) scale(0.6);
  }
  100% {
    transform: translateX(38vw) translateY(47vh) scale(0.69);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 9s;
}
.firefly:nth-child(13)::after {
  animation-duration: 9s, 9725ms;
  animation-delay: 0ms, 1842ms;
}

@keyframes move13 {
  0% {
    transform: translateX(-21vw) translateY(34vh) scale(0.35);
  }
  5.2631578947% {
    transform: translateX(2vw) translateY(18vh) scale(0.28);
  }
  10.5263157895% {
    transform: translateX(-43vw) translateY(-49vh) scale(0.9);
  }
  15.7894736842% {
    transform: translateX(-15vw) translateY(3vh) scale(0.88);
  }
  21.0526315789% {
    transform: translateX(28vw) translateY(8vh) scale(0.38);
  }
  26.3157894737% {
    transform: translateX(-39vw) translateY(-44vh) scale(0.72);
  }
  31.5789473684% {
    transform: translateX(-43vw) translateY(-3vh) scale(0.95);
  }
  36.8421052632% {
    transform: translateX(23vw) translateY(-37vh) scale(0.6);
  }
  42.1052631579% {
    transform: translateX(-11vw) translateY(-37vh) scale(0.68);
  }
  47.3684210526% {
    transform: translateX(-35vw) translateY(-5vh) scale(0.3);
  }
  52.6315789474% {
    transform: translateX(-32vw) translateY(-30vh) scale(0.63);
  }
  57.8947368421% {
    transform: translateX(41vw) translateY(-7vh) scale(0.42);
  }
  63.1578947368% {
    transform: translateX(-26vw) translateY(15vh) scale(0.31);
  }
  68.4210526316% {
    transform: translateX(-37vw) translateY(-23vh) scale(0.84);
  }
  73.6842105263% {
    transform: translateX(48vw) translateY(-21vh) scale(0.81);
  }
  78.9473684211% {
    transform: translateX(-30vw) translateY(12vh) scale(0.58);
  }
  84.2105263158% {
    transform: translateX(25vw) translateY(-26vh) scale(0.44);
  }
  89.4736842105% {
    transform: translateX(34vw) translateY(-28vh) scale(0.53);
  }
  94.7368421053% {
    transform: translateX(30vw) translateY(1vh) scale(0.72);
  }
  100% {
    transform: translateX(-7vw) translateY(43vh) scale(0.65);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 17s;
}
.firefly:nth-child(14)::after {
  animation-duration: 17s, 9429ms;
  animation-delay: 0ms, 7351ms;
}

@keyframes move14 {
  0% {
    transform: translateX(-49vw) translateY(-3vh) scale(0.52);
  }
  4.1666666667% {
    transform: translateX(-15vw) translateY(31vh) scale(0.27);
  }
  8.3333333333% {
    transform: translateX(33vw) translateY(-14vh) scale(0.59);
  }
  12.5% {
    transform: translateX(-31vw) translateY(-15vh) scale(0.93);
  }
  16.6666666667% {
    transform: translateX(32vw) translateY(2vh) scale(0.79);
  }
  20.8333333333% {
    transform: translateX(27vw) translateY(22vh) scale(0.79);
  }
  25% {
    transform: translateX(38vw) translateY(-40vh) scale(0.51);
  }
  29.1666666667% {
    transform: translateX(45vw) translateY(-5vh) scale(0.32);
  }
  33.3333333333% {
    transform: translateX(44vw) translateY(8vh) scale(0.33);
  }
  37.5% {
    transform: translateX(32vw) translateY(-30vh) scale(0.78);
  }
  41.6666666667% {
    transform: translateX(40vw) translateY(-36vh) scale(0.29);
  }
  45.8333333333% {
    transform: translateX(-35vw) translateY(8vh) scale(0.77);
  }
  50% {
    transform: translateX(-6vw) translateY(42vh) scale(0.96);
  }
  54.1666666667% {
    transform: translateX(-12vw) translateY(18vh) scale(0.97);
  }
  58.3333333333% {
    transform: translateX(20vw) translateY(16vh) scale(0.93);
  }
  62.5% {
    transform: translateX(50vw) translateY(38vh) scale(0.77);
  }
  66.6666666667% {
    transform: translateX(29vw) translateY(-33vh) scale(0.9);
  }
  70.8333333333% {
    transform: translateX(-21vw) translateY(-48vh) scale(0.94);
  }
  75% {
    transform: translateX(21vw) translateY(3vh) scale(0.39);
  }
  79.1666666667% {
    transform: translateX(-13vw) translateY(12vh) scale(0.31);
  }
  83.3333333333% {
    transform: translateX(-6vw) translateY(-44vh) scale(0.74);
  }
  87.5% {
    transform: translateX(46vw) translateY(29vh) scale(0.7);
  }
  91.6666666667% {
    transform: translateX(7vw) translateY(-7vh) scale(0.41);
  }
  95.8333333333% {
    transform: translateX(8vw) translateY(33vh) scale(0.28);
  }
  100% {
    transform: translateX(-2vw) translateY(28vh) scale(0.57);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 10s;
}
.firefly:nth-child(15)::after {
  animation-duration: 10s, 6940ms;
  animation-delay: 0ms, 5331ms;
}

@keyframes move15 {
  0% {
    transform: translateX(-34vw) translateY(1vh) scale(0.94);
  }
  5.5555555556% {
    transform: translateX(-29vw) translateY(48vh) scale(0.88);
  }
  11.1111111111% {
    transform: translateX(26vw) translateY(-45vh) scale(0.46);
  }
  16.6666666667% {
    transform: translateX(6vw) translateY(33vh) scale(0.45);
  }
  22.2222222222% {
    transform: translateX(35vw) translateY(-14vh) scale(0.5);
  }
  27.7777777778% {
    transform: translateX(-37vw) translateY(-45vh) scale(0.64);
  }
  33.3333333333% {
    transform: translateX(-43vw) translateY(-23vh) scale(0.32);
  }
  38.8888888889% {
    transform: translateX(-18vw) translateY(20vh) scale(0.92);
  }
  44.4444444444% {
    transform: translateX(21vw) translateY(-39vh) scale(0.8);
  }
  50% {
    transform: translateX(-25vw) translateY(3vh) scale(0.85);
  }
  55.5555555556% {
    transform: translateX(-32vw) translateY(12vh) scale(0.95);
  }
  61.1111111111% {
    transform: translateX(-26vw) translateY(9vh) scale(0.58);
  }
  66.6666666667% {
    transform: translateX(-49vw) translateY(35vh) scale(0.62);
  }
  72.2222222222% {
    transform: translateX(-2vw) translateY(35vh) scale(0.31);
  }
  77.7777777778% {
    transform: translateX(-14vw) translateY(-27vh) scale(0.43);
  }
  83.3333333333% {
    transform: translateX(-2vw) translateY(-42vh) scale(0.55);
  }
  88.8888888889% {
    transform: translateX(-44vw) translateY(-8vh) scale(0.93);
  }
  94.4444444444% {
    transform: translateX(-26vw) translateY(37vh) scale(0.82);
  }
  100% {
    transform: translateX(33vw) translateY(-13vh) scale(0.41);
  }
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flash {
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}
</style>
