export default class Calculator {
    add(numbers: string): string | number {
        if (numbers === "") return 0;
        
        let delimiter = ",";
        let numbersStr = numbers;
        let errors: string[] = [];

        // Gestion du délimiteur personnalisé
        if (numbers.startsWith("//")) {
            const firstNewLine = numbers.indexOf("\n");
            delimiter = numbers.substring(2, firstNewLine);
            numbersStr = numbers.substring(firstNewLine + 1);
        }

        // Vérification de la fin invalide
        if (numbersStr.endsWith(delimiter)) {
            return "Number expected but EOF found";
        }

        // Vérification des séparateurs consécutifs
        if (numbersStr.includes(`\n${delimiter}`) || numbersStr.includes(`${delimiter}\n`)) {
            return `Number expected but '\\n' found at position ${numbersStr.indexOf(`\n${delimiter}`) + 1}`;
        }

        // Conversion de la chaîne en tableau de nombres
        const numberStrWithoutDelimiter = numbersStr.split("\n").join(delimiter);
        const numberArray = numberStrWithoutDelimiter.split(delimiter).map(n => parseInt(n));
        
        // Vérification des nombres négatifs
        const negatives = numberArray.filter(n => n < 0);
        if (negatives.length > 0) {
            errors.push(`Negatives not allowed: ${negatives.join(",")}`);
        }

        // Vérification des séparateurs invalides
        const invalidSeparatorIndex = numbersStr.split("").findIndex((char, index) => {
            return char === delimiter && (numbersStr[index + 1] === delimiter || numbersStr[index - 1] === delimiter);
        });
        if (invalidSeparatorIndex !== -1) {
            errors.push(`Number expected but ',' found at position ${invalidSeparatorIndex + 1}`);
        }

        // S'il y a des erreurs, les retourner
        if (errors.length > 0) {
            return errors.join("\n");
        }

        // Calculer la somme
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}