// Solution for 0208-implement-trie problem

/*
Added words: "a", "as", "ate"

{
    children: {
        'a': {
            isEndOfWord: true,
            children: {
                's': {
                    isEndOfWord: true,
                    children: {}
                },
                't': {
                    isEndOfWord: false,
                    children: {
                        'e': {
                            isEndOfWord: true,
                            children: {}
                        }
                    }
                }
            }
        }
    }
}

*/


type TrieNode = {
    isEndOfWord?: true;
    children: Map<string, TrieNode>;
}
 
class Trie {
    trie: TrieNode;

    constructor() {
        this.trie = { children: new Map() };
    }

    insert(word: string): void {
        const characters = word.split('');

        let currentNode: TrieNode = this.trie;

        characters.forEach((char, index) => {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, {
                    children: new Map<string, TrieNode>(),
                });
            }

            currentNode = currentNode.children.get(char)!;
            
            if (index + 1 === characters.length) {
                currentNode.isEndOfWord = true;
            }
        });
    }

    search(word: string): boolean {
        const characters = word.split('');

        let currentNode: TrieNode = this.trie;

        for (let i = 0; i < characters.length; i++) {
            const char = characters[i];

            if (!currentNode.children.has(char)) {
                return false;
            }

            currentNode = currentNode.children.get(char)!;
        }

        return currentNode.isEndOfWord === true;
    }

    startsWith(prefix: string): boolean {
        const characters = prefix.split('');

        let currentNode: TrieNode = this.trie;

        for (let i = 0; i < characters.length; i++) {
            const char = characters[i];

            if (!currentNode.children.has(char)) {
                return false;
            }

            currentNode = currentNode.children.get(char)!;
        }

        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
