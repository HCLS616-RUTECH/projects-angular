import {ProjectCard} from "../models/project-card.model";

export const project_cards: ProjectCard[] = [
  {
    path: 'kanban-fire-todo',
    id: 1,
    description: 'Basic training project, for initialization and deployment of the project using angular and firebase.',
    name: 'Kanban Fire Todo',
    img: 'local_fire_department',
    technologies: ['Angular', 'Angular Material UI', 'Firebase']
  },
  {
    path: 'fake-store',
    id: 2,
    description: 'Study project with fake store.',
    name: 'Fake Store',
    img: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="150px " height="150px" viewBox="0 0 516.000000 472.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,472.000000) scale(0.100000,-0.100000)" stroke="none"> <path fill="#802c6e" d="M388 4704 c-185 -44 -329 -189 -373 -376 -22 -95 -22 -3841 0 -3936 45 -189 188 -332 377 -377 95 -22 4281 -22 4376 0 189 45 332 188 377 377 22 95 22 3841 0 3936 -45 189 -188 332 -377 377 -91 21 -4292 21 -4380 -1z m892 -859 l0 -85 -92 0 c-51 0 -110 -5 -130 -10 -51 -15 -97 -56 -122 -110 -20 -43 -21 -65 -27 -545 -5 -477 -6 -503 -27 -565 -25 -75 -68 -132 -120 -160 -21 -10 -31 -19 -25 -20 23 0 94 -73 119 -121 45 -89 47 -112 53 -639 7 -562 7 -558 77 -619 44 -39 90 -51 202 -51 l92 0 0 -85 0 -85 -153 0 c-107 0 -169 5 -204 15 -60 18 -135 81 -164 137 -44 87 -49 145 -49 640 0 307 -4 485 -11 520 -23 108 -77 176 -155 198 l-44 13 0 82 0 82 46 13 c83 24 130 81 153 188 7 35 11 209 11 505 0 467 5 546 41 627 55 124 136 158 372 159 l157 1 0 -85z m3005 50 c70 -35 116 -90 142 -168 15 -45 18 -119 23 -577 5 -470 8 -530 24 -572 22 -60 82 -114 141 -129 l45 -11 0 -82 0 -82 -45 -12 c-57 -15 -116 -73 -141 -138 -16 -44 -18 -99 -24 -579 -5 -388 -10 -541 -19 -570 -31 -96 -78 -153 -161 -196 -41 -21 -61 -24 -217 -27 l-173 -4 0 85 0 85 108 4 c122 4 172 22 209 78 45 65 46 84 53 610 7 521 8 538 50 620 20 39 102 120 122 120 6 0 -9 13 -34 29 -47 30 -83 81 -115 161 -15 40 -18 104 -23 540 -7 516 -9 535 -53 600 -37 56 -87 74 -209 78 l-108 4 0 85 0 85 173 -4 c168 -3 173 -4 232 -33z m-1104 -515 c10 -6 90 -104 176 -218 l158 -207 0 -700 0 -700 -24 -53 c-31 -69 -106 -137 -174 -157 -76 -22 -1398 -22 -1474 0 -68 20 -143 88 -174 157 l-24 53 0 700 0 700 157 207 c87 114 166 212 175 217 25 14 1177 15 1204 1z"/> <path fill="#802c6e" d="M2005 3113 l-66 -88 320 -3 c177 -1 465 -1 642 0 l320 3 -66 88 -66 87 -509 0 -509 0 -66 -87z"/> <path fill="#802c6e" d="M1840 2197 l0 -624 26 -24 26 -24 688 0 688 0 26 24 26 24 0 624 0 623 -740 0 -740 0 0 -623z m429 415 c21 -21 29 -41 35 -85 17 -149 133 -257 276 -257 143 0 259 108 276 257 6 44 14 64 35 85 52 53 141 26 155 -47 3 -19 1 -62 -5 -96 -39 -224 -235 -389 -461 -389 -226 0 -422 165 -461 389 -6 34 -8 77 -5 96 14 73 103 100 155 47z"/> </g> </svg>',
    technologies: ['Angular', 'Tailwind', 'Fake Store API']
  },
  {
    path: 'yandex-maps',
    id: 2,
    description: 'Study project with yandex maps.',
    name: 'Yandex Maps',
    img: '<svg width="150px" height="150px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Maps" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Color/icon_color"><g id="maps" transform="translate(56.000000, 56.000000)"><g id="Group-2" transform="translate(74.400000, 0.000000)"><path d="M176.74023,162.518585 L250.609717,128.855184 C250.609717,187.78935 209.903644,248.680606 173.790307,306.686224 L111.884792,398.583809 L138.969794,230.795362 L176.74023,162.518585 Z" id="Fill-1" fill="#E00000"></path><circle id="Oval" fill="#FF3333" cx="126.051092" cy="124.996714" r="124.996714"></circle><circle id="Oval" fill="#313030" cx="126.051092" cy="124.996714" r="49.8033784"></circle></g></g></g></g></svg>',
    technologies: ['Angular', 'Angular Material UI', 'Firebase', 'Yandex API']
  },
  {
    path: 'leaflet-maps',
    id: 3,
    description: 'Study project with leaflet maps.',
    name: 'Leaflet maps',
    img: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="150px" height="93.3492px" viewBox="0 0 842.000000 318.000000"  preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,318.000000) scale(0.100000,-0.100000)" fill="#c4e77d" stroke="none"><path d="M1200 2824 c-136 -35 -288 -141 -398 -278 -161 -200 -228 -407 -257 -797 -18 -238 -29 -312 -55 -381 -27 -72 -82 -158 -100 -158 -36 0 -140 -33 -207 -65 -91 -45 -157 -115 -171 -183 -14 -65 -6 -97 36 -133 33 -30 39 -31 97 -27 35 3 80 15 105 28 53 27 142 94 189 143 l33 35 67 -23 c36 -12 115 -44 175 -70 158 -68 239 -94 342 -107 225 -29 477 69 690 266 40 36 74 66 77 66 3 0 8 -15 11 -32 9 -50 50 -130 86 -172 79 -90 189 -136 323 -136 193 0 337 68 550 261 48 44 79 66 81 57 2 -7 9 -35 16 -62 16 -72 46 -123 104 -181 61 -61 116 -80 207 -72 128 11 269 117 414 312 l60 80 7 -105 c7 -113 24 -175 63 -225 65 -87 197 -87 325 -2 67 45 233 190 332 289 47 49 88 88 91 88 3 0 17 -31 31 -68 l26 -68 -45 -265 c-76 -446 -114 -729 -99 -729 12 0 328 53 332 56 2 1 16 92 32 204 28 190 66 416 76 451 4 14 10 14 62 -4 149 -50 328 25 538 225 l93 89 11 -43 c22 -87 32 -109 74 -165 60 -82 125 -115 231 -121 143 -7 279 54 484 218 53 42 105 87 115 98 11 12 22 22 26 22 3 0 14 -26 24 -57 23 -72 76 -153 126 -193 125 -99 320 -119 503 -50 80 30 215 122 314 214 44 42 83 76 86 76 2 0 7 -26 11 -57 18 -158 126 -273 257 -273 139 0 281 80 489 276 l70 66 0 75 0 75 -91 -86 c-110 -105 -172 -139 -251 -140 -46 -1 -61 3 -82 23 -66 62 -61 174 19 451 32 107 61 209 66 227 l9 31 88 6 c139 10 132 5 157 122 l22 101 -99 -5 c-54 -3 -98 -2 -98 2 0 3 32 112 70 240 39 129 70 237 70 239 0 6 -359 -68 -366 -76 -5 -4 -34 -97 -115 -369 -19 -66 -21 -68 -52 -68 -18 0 -48 -3 -68 -6 l-37 -6 -16 -87 c-10 -47 -19 -94 -22 -103 -4 -14 4 -17 49 -20 l54 -3 -44 -155 c-24 -85 -51 -189 -59 -230 -15 -70 -20 -79 -77 -138 -129 -132 -225 -195 -321 -210 -165 -26 -282 46 -336 207 -11 35 -20 65 -18 66 2 2 46 17 98 34 160 53 329 142 404 211 84 80 116 142 116 229 0 155 -102 241 -285 241 -160 0 -266 -50 -410 -195 -142 -142 -218 -285 -244 -460 -11 -70 -11 -70 -87 -142 -136 -131 -215 -184 -299 -203 -87 -20 -149 15 -193 109 -14 29 -17 66 -17 196 l0 161 77 86 c141 158 258 328 339 488 95 189 133 348 134 550 0 126 -2 138 -25 180 -19 34 -32 46 -52 48 -16 2 -105 -25 -209 -64 l-182 -67 -68 -141 c-135 -280 -258 -629 -319 -906 -25 -113 -50 -278 -50 -337 0 -40 -6 -48 -78 -122 -170 -172 -317 -227 -440 -165 -54 27 -112 95 -112 131 0 10 25 145 56 300 l57 282 127 129 c274 280 371 463 371 707 0 116 -17 185 -57 226 -34 36 -53 36 -174 3 -164 -44 -248 -74 -273 -99 -26 -27 -121 -240 -192 -433 -42 -114 -121 -414 -166 -634 l-21 -107 -212 -211 c-116 -116 -228 -222 -250 -236 -56 -38 -105 -42 -141 -12 -40 35 -45 111 -15 250 17 81 173 621 197 684 4 10 -4 14 -32 14 -27 0 -74 -21 -183 -81 -131 -73 -148 -80 -157 -64 -56 94 -114 133 -213 142 -183 17 -469 -159 -614 -378 -70 -106 -138 -270 -138 -334 0 -15 -25 -46 -75 -94 -159 -151 -241 -194 -367 -193 -83 1 -160 33 -204 85 -31 36 -71 118 -80 164 l-6 30 99 33 c193 63 360 155 435 238 63 70 82 117 83 203 0 67 -3 81 -30 124 -45 72 -114 107 -223 113 -100 5 -174 -9 -257 -50 -214 -108 -387 -351 -426 -601 -10 -63 -17 -77 -53 -115 -98 -104 -234 -176 -356 -189 -85 -8 -173 11 -402 88 -190 64 -214 70 -297 72 -50 1 -91 4 -91 6 0 1 21 26 47 55 64 71 148 202 182 283 56 136 90 293 127 583 42 336 69 430 150 520 47 52 106 74 187 68 83 -5 129 -37 165 -117 67 -144 7 -405 -113 -496 -46 -36 -131 -46 -170 -21 -13 9 -26 16 -29 16 -2 0 -7 -22 -11 -49 -19 -140 78 -234 222 -216 168 21 331 198 379 411 25 116 16 242 -24 328 -54 116 -153 199 -276 232 -65 18 -195 17 -266 -2z m4204 -157 c17 -24 21 -42 21 -110 -1 -165 -93 -348 -269 -534 -41 -43 -77 -75 -81 -72 -3 4 10 80 30 170 70 312 131 491 189 552 34 37 80 34 110 -6z m928 -17 c60 -119 -52 -486 -226 -748 -64 -94 -157 -214 -164 -208 -2 3 6 49 18 103 118 530 260 906 338 891 9 -2 25 -19 34 -38z m-3856 -763 c44 -52 38 -186 -11 -273 -46 -78 -130 -145 -233 -184 -99 -37 -92 -39 -92 32 1 177 93 381 198 438 49 27 109 21 138 -13z m1225 7 c40 -36 53 -75 52 -159 -2 -242 -164 -579 -314 -656 -78 -39 -159 -15 -195 57 -25 52 -23 180 4 285 57 214 190 430 297 481 50 23 126 19 156 -8z m3422 6 c83 -66 46 -279 -66 -375 -43 -37 -179 -108 -231 -121 l-29 -7 6 84 c14 195 96 367 199 418 54 26 88 27 121 1z"/></g></svg>',
    technologies: ['Angular', 'Angular Material UI', 'Firebase', 'Leaflet API']
  },
]
