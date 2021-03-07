(function () {
  const documet = {
    1: { id: 1, date: new Date(), tags: [], md: "" },
    2: { id: 1, date: new Date(), tags: [], md: "" },
    3: { id: 1, date: new Date(), tags: [], md: "" },
  };

  function loadDocument() {}

  function insertCommand() {}
  function tagCommand(tags, from, to) {}
  function tocCommand() {}
  function saveCommnad() {}
  function printCommand(tags) {}

  loadDocument();
  Object.assign(window, {
    APP: {
      loadCommand,
      insertCommand,
      tagCommand,
      printCommand,
      tocCommand,
      saveCommnad,
    },
  });
})();
