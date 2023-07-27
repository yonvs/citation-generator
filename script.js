function randomCitation(){
    const citationTable  = ["On ne se baigne jamais deux fois dans le même fleuve","Je sais que je ne sais rien","L’homme est un animal politique",
        "La mort n’est rien pour nous","Je pense, donc je suis","L’homme est né libre, et partout il est dans les fers","Ose savoir !","Le bonheur est parfois caché dans l'inconnu.",
        "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
        "Rien n'est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables.",
        "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
        "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.",
        "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
        "L'imagination est plus importante que le savoir.",
        "La vie est un long champ à cultiver. Voyager, c'est y semer la diversité de la Terre.",
        "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
        "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi.",
        "La simplicité est la sophistication suprême.",
        "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
        "La seule véritable erreur est celle dont on ne tire aucun enseignement.",
        "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
        "La réussite, c'est d'avoir ce que vous désirez. Le bonheur, c'est d'aimer ce que vous avez.",
        "L'échec est simplement l'opportunité de recommencer d'une manière plus intelligente.",
        "La confiance en soi est le premier secret du succès.",
        "La vie est soit une aventure audacieuse, soit rien du tout.",
        "La persévérance est la clé de la réussite.",
        "Soyez le changement que vous voulez voir dans le monde."
];
    const indexAleatoire = Math.floor(Math.random() * citationTable.length);
    document.getElementById("generator-citation").innerText = citationTable[indexAleatoire];
}
