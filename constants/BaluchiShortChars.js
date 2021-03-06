
export default  getValue = (key) => {
    map = new Map(
        [
            ["ا", "ا"],
            ["آ", "آ"],
            ["ب", "ﺑ"],
            ["ت", "ﺗ"],
            ["ج", "ﺟ"],
            ["م", "ﻣ"],
            ["پ", "ﭘ"],
            ["چ", "ﭼ"],
            ["ش", "ﺷ"],
            ["د", "د"],
            ["ڈ", "ڈ"],
            ["س", "ﺳ"],
            ["ۆ", "ۆ"],
            ["ێ", "ێـ"],
            ["م", "ﻣ"],
            ["ﻫ", "ﻩ"],
            ["گ", "گـ"],
            ["ی", "یـ"],
            ["ک", "کـ"],
            ["ل", "لـ"],
            [" ِ", " ِ"],
            ["ر", "ر"],
            ["ئو", "ئو"],
            ["ڑ", "ڑ"],
            ["ژ", "ژ"],
            ["ز", "ز"],
            ["ئے", "ئے"],
            ["ٹ", "ٹـ"],
            ["ی", "یـ"],
            ["ن", "نـ"]
        ]
    );
    console.log("Key: " + JSON.stringify(key));
    return map.get(key);
}

