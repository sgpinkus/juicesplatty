let idx;
let documents = [];

fetch("/index.json")
    .then(r => r.json())
    .then(data => {
        documents = data;
        idx = lunr(function () {
            this.ref("uri");
            this.field("title", { boost: 10 });
            this.field("content");
            data.forEach(doc => this.add(doc));
        });
    });

window.runSearch = function (query) {
    if (!idx || !query) return [];
    return idx.search(query).map(r =>
        documents.find(d => d.uri === r.ref)
    );
};
