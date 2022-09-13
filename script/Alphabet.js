

export default class Alphabet{
    #Alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    constructor(){
        this.RandomALphabet = this.#generateAlphabetRandom();
    }

    #generateAlphabetRandom(){
        let generateRandom = [...this.#Alphabet];
        for(let idx = 0 ;  idx< 200 ; idx++ ){
            let randomIdx1 = Math.floor(Math.random() * generateRandom.length);
            let randomIdx2 = Math.floor(Math.random() * generateRandom.length);
            let svg=generateRandom[randomIdx1];
            generateRandom[randomIdx1] = generateRandom[randomIdx2];
            generateRandom[randomIdx2] = svg;
        }
        return generateRandom
    }
    updateAlphabet(chaine = null){
        if(chaine === null){
            console.log(chaine);
            this.RandomALphabet = this.#generateAlphabetRandom();
        }else{
            this.RandomALphabet = chaine;
        }
    }
    translate(toTranslateText){
        let tranlatedText = "";
        for(let element of toTranslateText){
            let letter = element.charCodeAt(0);
            if(letter >= 'A'.charCodeAt(0) && letter <= 'Z'.charCodeAt(0) ){
                tranlatedText += this.RandomALphabet[letter - 'A'.charCodeAt(0)];
            }else if(letter >= 'a'.charCodeAt(0) && letter <= 'z'.charCodeAt(0)){
                tranlatedText += this.RandomALphabet[letter - 'a'.charCodeAt(0)+26];
            }
            else{
                tranlatedText += element;
            }
        }
        return tranlatedText;
    }
    reverseTranslate(translatedText){
        let toTranslate = "";
        for(let items of translatedText){
            let find = this.RandomALphabet.findIndex( e => e === items);
            console.log(find);
            if(find !== -1){
                toTranslate += this.#Alphabet[find];
            }else{
                toTranslate += items;
            }
        }
        return toTranslate;
    }
}