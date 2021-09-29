fetch("https://random-words-api.vercel.app/word")
  .then(word => word.json())
  .then(wordData => {
    
      const wordt = wordData.word ;
      const definitiont = wordData.definition ;
      const pronunciationt = wordData.pronunciation ;


      const wordp = document.getElementById('wordp')
      const definitionp = document.getElementById('definitionp')
      const pronunciationp = document.getElementById('pronunciationp')

      wordp.innerHTML = wordt;
      definitionp.innerHTML = definitiont;
      pronunciationp.innerHTML = pronunciationt;

  })