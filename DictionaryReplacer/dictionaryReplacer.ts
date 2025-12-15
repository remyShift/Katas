export default class DictionaryReplacer {
    replace(text: string | null, dictionary: Map<string, string>) {
        if (text === null) return null;
        let result: string = "";
        text.split("$").forEach((word, index) => {
            if (index % 2 === 0) {
                result += word;
            } else {
                const key = word.trim();
                if (dictionary.has(key)) {
                    result += dictionary.get(key);
                }
            }
        })
        return result;
    }
}
