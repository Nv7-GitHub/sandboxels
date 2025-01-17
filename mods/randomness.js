//lily made some stupid things

//TPT reference
elements.warp = {
    name: "warp",
    color: "#111111",
    behavior: [
        "M1%20 AND SW%20|M1%20 AND SW%20|M1%20 AND SW%20",
        "M1%20 AND SW%20|DL%0.5|M1%20 AND SW%20",
        "M1%20 AND SW%20|M1%20 AND SW%20|M1%20 AND SW%20",
    ],
    category: "special",
    state: "gases",
},

//unrealistically flammable thing
elements.unnamed_gas = {
    color: "#ddee11",
    behavior: [
        "M1%05 AND SW%2 AND HT:1%1|M1%05 AND SW%2 AND HT:1%1|M1%05 AND SW%2 AND HT:1%1",
        "M1%10 AND SW%2 AND HT:1%1|HT:1%1.000000000000000000|M1%10 AND SW%2 AND HT:1%1",
        "M1%15 AND SW%2 AND HT:1%1|M1%15 AND SW%2 AND HT:1%1|M1%15 AND SW%2 AND HT:1%1",
    ],
    behaviorOn: [
        "M1%10 AND SW%4 AND HT:2%2|M1%10 AND SW%4 AND HT:2%2|M1%10 AND SW%4 AND HT:2%2",
        "M1%20 AND SW%4 AND HT:2%2|HT:2%2 AND CH:plasma%0.01|M1%20 AND SW%4 AND HT:2%2",
        "M1%30 AND SW%4 AND HT:2%2|M1%30 AND SW%4 AND HT:2%2|M1%30 AND SW%4 AND HT:2%2",
    ],
    category: "gases",
    burn: 3000,
    burnTime: 5,
    burnInto: "burning_unnamed_gas",
    state: "gas",
    density: 2,
    tempHigh: 95,
    stateHigh: "burning_unnamed_gas",
    conduct: 0.2,
}, 

elements.burning_unnamed_gas = {
    color: "#eedd11",
    behavior: [
        "M2 AND HT:3750%70 AND CR:plasma%10|M1 AND HT:3750%70 AND CR:plasma%10.0|M2 AND HT:3750%70 AND CR:plasma%10",
        "M1 AND HT:3750%70 AND CR:plasma%10|HT:3750%70.000000 AND CH:plasma%0.03|M1 AND HT:3750%70 AND CR:plasma%10",
        "M2 AND HT:3750%70 AND CR:plasma%10|M1 AND HT:3750%70 AND CR:plasma%10.0|M2 AND HT:3750%70 AND CR:plasma%10",
    ],
    behaviorOn: [
        "M2 AND HT:7500%70 AND CR:plasma%15|M1 AND HT:7500%70 AND CR:plasma%15.0|M2 AND HT:7500%70 AND CR:plasma%15",
        "M1 AND HT:7500%70 AND CR:plasma%15|HT:7500%70.000000 AND CH:plasma%0.02|M2 AND HT:7500%70 AND CR:plasma%15",
        "M2 AND HT:7500%70 AND CR:plasma%15|M1 AND HT:7500%70 AND CR:plasma%15.0|M2 AND HT:7500%70 AND CR:plasma%15",
    ],
    category: "gases",
    burn: 3000,
    burnTime: 1750,
    burnInto: "plasma",
    state: "gas",
    density: 1.5,
    tempHigh: 160487147,
    stateHigh: "plasma",
    hidden: true,
}, 
elements.unnamed_powder = {
    color: "#cddd22",
    behavior: [
        "HT:2%2 AND CR:unnamed_gas%3|HT:2%2 AND CR:unnamed_gas%3|HT:2%2 AND CR:unnamed_gas%3",
        "HT:2%2 AND CR:unnamed_gas%1|HT:2%2.00000000000000000000|HT:2%2 AND CR:unnamed_gas%1",
        "M2 AND HT:2%2.0000000000000|M1 AND HT:2%2.0000000000000|M2 AND HT:2%2.0000000000000",
    ],
    behaviorOn: [
        "HT:4%4 AND CR:unnamed_gas%6|HT:4%4 AND CR:unnamed_gas%6|HT:4%4 AND CR:unnamed_gas%6",
        "HT:4%4 AND CR:unnamed_gas%2|HT:4%4.00000000000000000000|HT:4%4 AND CR:unnamed_gas%2",
        "M2 AND HT:4%4.0000000000000|M1 AND HT:4%4.0000000000000|M2 AND HT:4%4.0000000000000",
    ],
    category: "powders",
    burn: 3000,
    burnTime: 5,
    burnInto: "burning_unnamed_gas",
    state: "powders",
    density: 20,
    tempHigh: 95,
    stateHigh: "burning_unnamed_gas",
    conduct: 0.4,
}, 

elements.burning_unnamed_powder = {
    color: "#ddcd22",
    behavior: [
        "HT:89850%70 AND CR:burning_unnamed_gas%7|HT:89850%70 AND CR:burning_unnamed_gas%7|HT:89850%70 AND CR:burning_unnamed_gas%7",
        "HT:89850%70 AND CR:burning_unnamed_gas%7|HT:89850%70 AND CH:plasma%00000000000.03|HT:89850%70 AND CR:burning_unnamed_gas%7",
        "M2 AND HT:89850%70 AND CR:burning_unnamed_gas%7|M1 AND HT:89850%70 AND CR:burning_unnamed_gas%7|M2 AND HT:89850%70 AND CR:burning_unnamed_gas%7",
    ],
    behavior: [
        "HT:179700%70 AND CR:burning_unnamed_gas%9|HT:179700%70 AND CR:burning_unnamed_gas%9|HT:179700%70 AND CR:burning_unnamed_gas%9",
        "HT:179700%70 AND CR:burning_unnamed_gas%9|HT:179700%70 AND CH:plasma%00000000000.03|HT:179700%70 AND CR:burning_unnamed_gas%9",
        "M2 AND HT:179700%70 AND CR:burning_unnamed_gas%9|M1 AND HT:179700%70 AND CR:burning_unnamed_gas%9|M2 AND HT:179700%70 AND CR:burning_unnamed_gas%9",
    ],
    category: "powders",
    burn: 3000,
    burnTime: 2100,
    burnInto: "plasma",
    state: "powders",
    density: 15,
    tempHigh: 160487148,
    stateHigh: "burning_unnamed_gas",
    conduct: 0.4,
    hidden: true,
},
elements.steam_remover = { //pov: you tried using water to cool something
    name: "steam remover",
    color: "#542900",
    behavior: [
        "CH:steam>steam_remover|CH:steam>steam_remover|CH:steam>steam_remover",
        "CH:steam>steam_remover|DL%40|CH:steam>steam_remover",
        "CH:steam>steam_remover|CH:steam>steam_remover|CH:steam>steam_remover",
    ],
    category: "special",

},     
elements.filler_remover = { //pov: you put a filler for fun but now you want your scene back
    name: "filler remover",
    color: "#00dd00",
    behavior: [
        "CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover|CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover|CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover",
        "CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover|DL%40|CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover",
        "CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover|CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover|CH:filler>filler_remover AND CH:lattice>filler_remover AND CH:virus>filler_remover AND CH:gray_goo>filler_remover",
    ],
    "category":"special",

},     
elements.plasma_remover = { //why would you need this?
    name: "plasma remover",
    color: ["#77ff00","#4e7b26","#77ff00"],
    behavior: [
        "CH:plasma>plasma_remover|CH:plasma>plasma_remover|CH:plasma>plasma_remover",
        "CH:plasma>plasma_remover|DL%40|CH:plasma>plasma_remover",
        "CH:plasma>plasma_remover|CH:plasma>plasma_remover|CH:plasma>plasma_remover",
    ],
    category: "special",
    temp: 7065,
},
/*elements.black_decay = { //random mystcraft mod reference
    name: "black decay",
    color: "#222222",
    behavior: [
        "XX|CH:black_decay%2 AND DL:black_decay%30|XX", //forcing it to destroy itself through another element
        "CH:black_decay%1|DL%0.2|CH:black_decay%1",
        "XX|CH:black_decay%1 AND M1|XX",
    ],
    category: "special",
},*/
elements.tungsten = { //GTCE reference
    color: "#848A7D",
    behavior: behaviors.WALL,
    tempHigh: 3422,
    category: "solids",
    density: 19250,
    conduct: 0.55,
},

elements.tungstensteel = {
    color: "#555589",
    behavior: behaviors.FAIRYKILL,
    tempHigh: 3600,
    category: "solids",
    density: 19000,
    conduct: 0.48,
},

elements.molten_tungsten = {
    color: "#FFC285",
    behavior: behaviors.MOLTEN,
    density: 17600,
    conduct: 0.20,
    temp: 3500,
    tempHigh: 5555,
    stateHigh: "tungsten_gas",
    category: "liquids",
    hidden: true,
},         

elements.tungsten_gas = {
    color: "#FFEEE2",
    behavior: [
        "CR:plasma%0.625 AND M2|M1|CR:plasma%0.625 AND M2",
		"M1|XX|M1",
		"CR:plasma%0.625 AND M2|M1|CR:plasma%0.625 AND M2",
	],
    density: 17600,
    conduct: 0.20,
    temp: 5600,
    tempLow: 5555,
    stateLow: "molten_tungsten",
    category: "gases",
    hidden: true,
},

elements.molten_steel = {
	reactions: {
		"molten_tungsten": { "elem1":"molten_tungstensteel", "elem2":"molten_tungstensteel" }
	}
}

elements.molten_tungstensteel = {
	behavior: [
        "XX|DL:"+eLists.FAIRY+" AND CR:fire%2.5|XX",
        "DL:"+eLists.FAIRY+" AND M2|XX|DL:"+eLists.FAIRY+" AND M2",
        "M1|DL:"+eLists.FAIRY+"|M1",
    ]
}

runAfterLoad(function() {
	elements.tungstensteel.behavior = [
        "XX|DL:"+eLists.FAIRY+"|XX",
        "DL:"+eLists.FAIRY+"|XX|DL:"+eLists.FAIRY+"",
        "XX|DL:"+eLists.FAIRY+"|XX",
    ],
	elements.molten_tungstensteel.behavior = [
        "XX|DL:"+eLists.FAIRY+" AND CR:fire%2.5|XX",
        "DL:"+eLists.FAIRY+" AND M2|XX|DL:"+eLists.FAIRY+" AND M2",
        "M1|DL:"+eLists.FAIRY+"|M1",
    ]
});
