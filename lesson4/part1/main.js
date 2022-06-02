
/**
 * Класс текст получает на вход ноду в которой нужно разделить текст на параграфы и заменить апострофы на кавычки.
 */
class Text {
    constructor(textNode) {
        this.textNode = textNode;
        this.replaceApos();
        this.textNode.innerHTML = this.setParagraphs(textNode.textContent);
    }

    setParagraphs(str) {
        return '<p>' + str.replaceAll('\n', '</p><p>') + '</p>';
    }

    replaceApos() {
        this.textNode.textContent = this.textNode.textContent.replaceAll(/(\B')/g, '"');
    }

}

text = new Text(document.querySelector('.text-wrapper'));

