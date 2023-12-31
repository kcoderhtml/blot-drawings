const pb = createTurtle()
const pbSize = 7/1000

for (let n = 0; n < 10; n++) {
  const text = createTurtle().fromSVG(String.raw`<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   width="210mm"   height="210mm"   viewBox="0 0 210 210"   version="1.1"   id="svg1"   inkscape:version="1.3 (0e150ed, 2023-07-21)"   sodipodi:docname="purplebubble.svg"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview1"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:document-units="mm"     inkscape:zoom="0.29139076"     inkscape:cx="803.04535"     inkscape:cy="600.56811"     inkscape:window-width="1680"     inkscape:window-height="997"     inkscape:window-x="0"     inkscape:window-y="25"     inkscape:window-maximized="0"     inkscape:current-layer="layer1" />  <defs     id="defs1">    <rect       x="102.26345"       y="152.20606"       width="556.5034"       height="482.77859"       id="rect1" />  </defs>  <g     inkscape:label="Layer 1"     inkscape:groupmode="layer"     id="layer1">    <path       style="font-size:176.389px;font-family:'HWT Artz';-inkscape-font-specification:'HWT Artz, Normal';stroke-width:0.6"       d="m 57.781737,125.80823 c 0,0 2.116668,0.35278 6.526393,0.35278 9.877785,0 26.63474,-1.76389 32.279189,-13.75834 2.645835,-5.46806 5.468061,-18.697235 5.468061,-28.575019 0,-24.694461 -10.759732,-40.216694 -29.809744,-40.216694 H 33.969221 c -10.58334,0 -10.58334,7.055561 -10.58334,14.111121 v 97.013952 c 0,7.05556 0,14.11112 10.58334,14.11112 h 8.81945 c 10.583341,0 10.583341,-7.05556 10.583341,-14.11112 v -25.92918 c 0,-1.5875 0.176389,-2.99862 4.409725,-2.99862 z m 3.52778,-58.384757 c 7.937505,0 9.701396,9.701396 9.701396,17.638901 0,7.937505 -0.352778,15.698626 -9.701396,15.698626 -7.05556,0 -8.113894,-1.058338 -8.113894,-6.879176 0,-2.116668 0.176389,-5.29167 0.176389,-8.81945 0,-3.704169 -0.176389,-6.702782 -0.176389,-8.995839 0,-6.350005 1.058334,-8.643062 8.113894,-8.643062 z M 171.19975,100.93738 c 9.70139,-5.115276 13.93473,-15.522228 13.93473,-25.929179 0,-16.227789 -7.58473,-31.397244 -30.33891,-31.397244 h -37.92364 c -10.58334,0 -10.58334,7.055561 -10.58334,14.111121 v 97.013952 c 0,7.05556 0,14.11112 10.58334,14.11112 h 39.33475 c 11.46529,0 18.87362,-0.35278 27.51668,-16.22779 2.99862,-5.64444 4.76251,-12.52362 4.76251,-19.40279 0,-12.34723 -4.58612,-26.28196 -17.28612,-30.5153 -0.52917,-0.17638 -0.70556,-0.52916 -0.70556,-0.88194 0,-0.35278 0.17639,-0.70556 0.70556,-0.88195 z M 145.09417,67.423473 c 7.05556,0 8.81945,5.820838 8.81945,11.994453 0,6.173615 -1.76389,11.818063 -8.81945,11.818063 -8.81945,0 -8.81945,-2.998613 -8.81945,-11.818063 0,-8.819451 0,-11.994453 8.81945,-11.994453 z m 0.88195,46.213917 c 9.70139,0 9.70139,7.58473 9.70139,15.52224 0,7.9375 -0.88194,15.87501 -9.70139,15.87501 -9.7014,0 -9.7014,-5.29167 -9.7014,-15.87501 0,-10.58334 0,-15.52224 9.7014,-15.52224 z"       id="text1"       aria-label="PB" />  </g></svg>`);
  text.scale([0.3+(pbSize*n), -0.3-(pbSize*n)]);
  text.translate([-36,-15])
  pb.join(text)
}

const bubbles = createTurtle()

const bubbleSize = 0.0024
const startPosition = [-1419, -1319.8]
const space = 8.8
const count = [14,14,3]

for (let n = 0; n < count[0]; n++) {
  for (let i = 0; i < count[1]; i++) {
    const rotation = randIntInRange(0, 360/((count[0]*count[1])/(i*n)))
    for (let m = 0; m < count[2]; m++) {
      const logo = createTurtle().fromSVG(String.raw`<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg   version="1.0"   width="1024.000000pt"   height="296.000000pt"   viewBox="0 0 1024.000000 296.000000"   preserveAspectRatio="xMidYMid meet"   id="svg2"   sodipodi:docname="Converted File.svg"   inkscape:version="1.3 (0e150ed, 2023-07-21)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs2" />  <sodipodi:namedview     id="namedview2"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:document-units="pt"     inkscape:zoom="1.1938824"     inkscape:cx="307.40045"     inkscape:cy="106.37563"     inkscape:window-width="1680"     inkscape:window-height="997"     inkscape:window-x="0"     inkscape:window-y="25"     inkscape:window-maximized="0"     inkscape:current-layer="g2" />  <g     transform="translate(0.000000,296.000000) scale(0.100000,-0.100000)"     fill="#000000"     stroke="none"     id="g2">    <path       d="M 1230,2869 C 878,2852 569,2814 416,2769 274,2727 167,2653 135,2576 90,2468 88,1879 131,1090 143,866 150,834 209,768 l 94,-72 c 31,-18 94,-45 139,-59 166,-52 232,-60 557,-65 l 304,-4 181,-125 c 186,-129 344,-213 471,-253 82,-26 255,-40 255,-21 0,7 -40,51 -90,98 -120,115 -133,162 -62,236 59,62 68,64 312,70 411,11 577,73 662,244 l 33,67 6,311 c 10,420 9,1288 0,1353 -6,42 -15,60 -47,93 -111,115 -428,199 -862,229 -174,11 -671,11 -932,-1 z"       id="path1"       sodipodi:nodetypes="cccccccccccscccccccccc" />  </g></svg>`);
      logo.scale([-bubbleSize+(m*0.0008), bubbleSize-(m*0.0008)]);
      logo.translate([startPosition[0]-(n*space), startPosition[1]-(i*space)])
      logo.rotate(i*n/3)
      logo.rotate(rotation)
      bubbles.join(logo)
    }
  }
}

drawTurtles([bubbles, pb])