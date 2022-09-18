let pronouns = ['the','our', "their", "her"];
let adjs = ['great', 'big', "small", "short" ];
let nouns = ['jogger','racoon', "ball", "leaf", "ear"];
let domains = ["com", "net", "us", "io", "edu"]

function generateRandomSentence(pronouns,adjs,nouns, domains){
    let randomCombination = []
    for(let pronoun of pronouns){
        for(let adj of adjs){
            for(let noun of nouns){
                for(let domain of domains){
                    randomCombination.push(`${pronoun}${adj}${noun}.${domain}`)     
                }
                
            }
        }
    }
    return randomCombination
}


console.log(generateRandomSentence(pronouns, adjs, nouns, domains))