<div id="mocha"></div>
<script charset="utf-8" id="seajsnode" src="/test_suite/seajs/seajs/2.2.1/sea.js"></script>
<link rel="stylesheet" href="/test_suite/mocha/1.9.0/mocha.css" />
<script src="/test_suite/mocha/1.9.0/mocha.js"></script>
<script>
(function() {
  mocha.ui('bdd');
  seajs.config({
    base: '/test_suite',
    alias:{
      $: 'jquery/jquery/1.11.1/jquery',
      jquery: "jquery/jquery/1.11.1/jquery",
      expect: 'gallery/expect/0.3.1/expect',
      sinon: 'gallery/sinon/1.6.0/sinon',
      'event-simulate': 'gallery/event-simulate/1.0.0/event-simulate'
    }
  });
  seajs.use(['/tests/<#=name#>-spec'], function() {
    mocha.run();
  })
})();
</script>
