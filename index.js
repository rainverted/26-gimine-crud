const Gimine = require('./Gimine.js');

const bajorai = new Gimine();

bajorai.gime({ name: 'Augustas', year: 2000 });
bajorai.gime({ name: 'Barbora', year: 1998 });


bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.
// 2. Barbora gime 1998 metais ir nera vedes.

bajorai.zmogausInformacija(0);
// {name: 'Augustas', year: 2000, married: false}

bajorai.zmogausInformacija(1);
// {name: 'Barbora', year: 1998, married: false}

bajorai.vestuves(1);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.
// 2. Barbora gime 1998 metais ir yra vedes.

bajorai.vestuves(0);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir yra vedes.
// 2. Barbora gime 1998 metais ir yra vedes.

bajorai.mire(1);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir yra vedes.

bajorai.skyrybos(0);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.