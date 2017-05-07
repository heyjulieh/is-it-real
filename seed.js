console.log ('This seed file is a-go!')
var db = require("./models");

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var animalList = [];
animalList.push({
    name: "California Tiger Salamander",
    type: 'Amphibian',
    endangeredYear: 2004,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/California_Tiger_Salamander.jpg/1599px-California_Tiger_Salamander.jpg'
  });
  animalList.push({
    name: "Houston Toad",
    type: 'Amphibian',
    endangeredYear: 1970,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Houston_toad.jpg/440px-Houston_toad.jpg'
  });
  animalList.push({
    name: "Barton Springs Salamander",
    type: 'Amphibian',
    endangeredYear: 1997,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/BartonSpringsSalamander.jpeg'
  });
  animalList.push({
    name: "Shenandoah Salamander",
    type: 'Amphibian',
    endangeredYear: 1989,
    locations: ['Virginia'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Shenandoah_Salamander_03.jpg/440px-Shenandoah_Salamander_03.jpg'
  });
  animalList.push({
    name: "Mountain Yellow-Legged Frog",
    type: 'Amphibian',
    endangeredYear: 2013,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Rana_muscosa.jpg'
  });
  animalList.push({
    name: "Sierra Nevada Yellow-Legged Frog",
    type: 'Amphibian',
    endangeredYear: 2014,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Rana_sierrae01.jpg/440px-Rana_sierrae01.jpg'
  });
  animalList.push({
    name: "Texas Blind Salamander",
    type: 'Amphibian',
    endangeredYear: 1967,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Texas_blind_salamander.jpg/480px-Texas_blind_salamander.jpg'
  });
  animalList.push({
        name: 'Mexican Wolf',
        type: 'Mammal',
        endangeredYear: 1976,
        locations: ['Arizona',' New Mexico',' Texas'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mexican_Wolf_2_yfb-edit_1.jpg/1920px-Mexican_Wolf_2_yfb-edit_1.jpg'
    });
animalList.push({
    name: 'Red Wolf',
    type: 'Mammal',
    endangeredYear: 1996,
    locations: ['Florida','Mississippi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/07-03-23RedWolfAlbanyGAChehaw.jpg'
});
animalList.push({
    name: 'Morro Bay Kangaroo Rat',
    type: 'Mammal',
    endangeredYear: 1970,
    locations: ['California'],
    image: 'https://www.fws.gov/cno/newsroom/highlights/2016/vector/images/Morro-Bay_kangaroo-rat-MoosePeterson1985.jpg'
});
animalList.push({
    name: 'Giant Kangaroo Rat',
    type: 'Mammal',
    endangeredYear: 1987,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dipodomys_ingens.jpg/1920px-Dipodomys_ingens.jpg'
});
animalList.push({
    name: 'San Bernardino Merriams Kangaroo Rat',
    type: 'Mammal',
    endangeredYear: 1998,
    locations: ['Arizona',' California',' New Mexico', ' Texas'],
    image: 'http://cms.sbcounty.gov/portals/50/Land/kangaroorat.jpg'
});
animalList.push({
    name: 'Stellar Sea Lion',
    type: 'Mammal',
    endangeredYear: 1997,
    locations: ['Alaska'],
    image: 'http://www.adfg.alaska.gov/static/species/speciesinfo/stellersealion/images/ssl_2_nmml.jpg'
});
animalList.push({
    name: 'Hawaiian Hoary Bat',
    type: 'Mammal',
    endangeredYear: 1973,
    locations: ['Hawaii'],
    image: 'https://c1.staticflickr.com/5/4087/5125460738_d69abf02c4_b.jpg'
});
animalList.push({
    name: 'Amargosa Vole',
    type: 'Mammal',
    endangeredYear: 1984,
    locations: ['California'],
    image: 'https://i0.wp.com/www.rspb.org.uk/community/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-24-08/Bank-vole-by-Richard-Cousens-LOW-RES.JPG'
});
animalList.push({
    name: 'Black-footed Ferret',
    type: 'Mammal',
    endangeredYear: 1987,
    locations: ['Arizona', ' South Dakota', ' Wyoming'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Mustela_nigripes_2.jpg'
});
animalList.push({
    name: 'Gray Bat',
    type: 'Mammal',
    endangeredYear: 2004,
    locations: ['Alabama',' Mississippi'],
    image: 'https://www.fws.gov/midwest/endangered/images/mammals/grba_female_MonroeCoKY7Aug06.jpg'
});
animalList.push({
    name: 'Indiana Bat',
    type: 'Mammal',
    endangeredYear: 1967,
    locations: ['Indiana',' Kentucky'],
    image: 'http://www.redorbit.com/media/uploads/2012/09/Daubentons-Bat-Myotis-daubentonii.jpg'
});
animalList.push({
    name: 'Marsh Rice Rat',
    type: 'Mammal',
    endangeredYear: 2009,
    locations: ['Florida', ' Louisiana',' Kansas',' New Jersey',' Texas'],
    image: 'http://cdn.c.photoshelter.com/img-get2/I0000YA33whpuGxQ/fit=1000x750/Marsh-Rice-Rat-0001-rnb-8832.jpg'
});
animalList.push({
    name: 'Pacific Pocket Mouse',
    type: 'Mammal',
    endangeredYear: 1993,
    locations: ['California'],
    image: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2016/06/Pacific-Pocket-Mouse-eating-lettuce.jpg'
});
animalList.push({
    name: 'Gulf Coast Jaguarundi',
    type: 'Mammal',
    endangeredYear: 1976,
    locations: ['Texas'],
    image: 'https://biodiversitywarriors.wikispaces.com/file/view/photo_jaguarundi.jpg/397137988/392x298/photo_jaguarundi.jpg'
});
animalList.push({
    name: 'Woodland Caribou',
    type: 'Mammal',
    endangeredYear: 1984,
    locations: ['Idaho', ' Washington'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Reindeer_licking_salt_from_roadway.jpg'
});
animalList.push({
    name: 'Salt Marsh Harvest Mouse',
    type: 'Mammal',
    endangeredYear: 1970,
    locations: ['California'],
    image: 'https://www.fws.gov/uploadedImages/Region_8/NWRS/Zone_2/San_Francisco_Bay_Complex/San_Pablo_Bay/Images/Wildlife_and_Habitat/SMHM_PelicanMedia.jpg'
});
animalList.push({
    name: 'Mount Graham Red Squirrel',
    type: 'Mammal',
    endangeredYear: 1982,
    locations: ['Arizona'],
    image: 'http://azgfd.net/artman/uploads/2/MGRS_w_cone_Taubert_web.jpg'
});
animalList.push({
    name: 'West Indian Manatee',
    type: 'Mammal',
    endangeredYear: 2007,
    locations: ['Florida'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Manatee_with_calf.PD_-_colour_corrected.jpg/1920px-Manatee_with_calf.PD_-_colour_corrected.jpg'
});
animalList.push({
    name: 'Island Fox',
    type: 'Mammal',
    endangeredYear: 2004,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Urocyon_littoralis_pair.jpg'
});
animalList.push({
    name: 'Kit Fox',
    type: 'Mammal',
    endangeredYear: 1967,
    locations: ['Arizona',' California',' Colorado',' Nevada',' New Mexico',' Utah',' Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/San_Joaquin_Kit_fox_B-40-13_08_20_1993.jpg/1920px-San_Joaquin_Kit_fox_B-40-13_08_20_1993.jpg'
});
animalList.push({
    name: 'Florida Panther',
    type: 'Mammal',
    endangeredYear: 1973,
    locations: ['Florida'],
    image: 'http://www.newyorker.com/wp-content/uploads/2015/09/OConnor-Florida-Panthers-1200.jpg'
});


animalList.push({

    type: 'Bird',
    endangeredYear: 1976,
    locations: ['Puerto Rico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Yellow-shouldered_Blackbird_5_Mike_Morel.jpg/1920px-Yellow-shouldered_Blackbird_5_Mike_Morel.jpg'
  });
animalList.push({
    name: 'Whooping Crane',
    type: 'Bird',
    endangeredYear: 1967,
    locations: ['Florida',' Portland',' Texas',' Wisconsin'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grus_americana_Sasata.jpg/330px-Grus_americana_Sasata.jpg'
  });
animalList.push({
    name: 'California Condor',
    type: 'Bird',
    endangeredYear: 1987,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Condor_in_flight.JPG/800px-Condor_in_flight.JPG'
  });
animalList.push({
    name: "Kirtland's warbler",
    type: 'Bird',
    endangeredYear: 1973,
    locations: ['Michigan',' Wisconsin'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dendroica_kirtlandii_-Michigan%2C_USA_-male-8_%285%29.jpg/330px-Dendroica_kirtlandii_-Michigan%2C_USA_-male-8_%285%29.jpg'
  });
animalList.push({
    name: "Ivory-billed woodpecker",
    type: 'Bird',
    endangeredYear: 1973,
    locations: ['Arkansas',' Louisiana',' Mississippi',' Florida'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ivory-billed_Woodpecker_by_Jerry_A._Payne.jpg/390px-Ivory-billed_Woodpecker_by_Jerry_A._Payne.jpg'
  });
animalList.push({
    name: "Saint Croix ground lizard",
    type: 'Reptile',
    endangeredYear: 1977,
    locations: ['US Virgin Islands'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ameiva_polops_St._Croix_Ground_Lizard.JPG/330px-Ameiva_polops_St._Croix_Ground_Lizard.JPG'
  });
animalList.push({
    name: "Culebra Island giant anole",
    type: "Reptiles",
    endangeredYear: 1977,
    locations: ['Puerto Rico'],
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Anolis_roosevelti.jpg/330px-Anolis_roosevelti.jpg'
  });
animalList.push({
    name: "Loggerhead sea turtle",
    type: 'Reptile',
    endangeredYear: 1977,
    locations: ['Puerto Rico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/330px-Loggerhead_sea_turtle.jpg'
  });
animalList.push({
    name: "Spotted turtle",
    type: 'Reptile',
    endangeredYear: 2012,
    locations: ['Illinois',' Indiana',' Michigan',' North Carolina',' Ohio',' South Carolina'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Clemmys_guttataHolbrookV1P11A_Flipped.jpg/330px-Clemmys_guttataHolbrookV1P11A_Flipped.jpg'
  });
animalList.push({
    name: "American Crocodile",
    type: 'Reptile',
    endangeredYear: 2007,
    locations: ['Florida'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg/330px-Crocodylus_acutus_mexico_02-edit1.jpg'
  });
animalList.push({
    name: "New Mexico ridgenosed rattlesnake",
    type: 'Reptile',
    endangeredYear: 1973,
    locations: ['Arizona',' New Mexico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Ridgenose.jpg'
  });
animalList.push({
    name: "Mona ground iguana",
    type: 'Reptile',
    endangeredYear: 1977,
    locations: ['Puerto Rico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Iguana_sitting_down_looking_to_the_left.jpg/330px-Iguana_sitting_down_looking_to_the_left.jpg'
  });
animalList.push({
    name: "Leatherback sea turtle",
    type: 'Reptile',
    endangeredYear: 1970,
    locations: ['California',' Costa Rica',' Florida',' Oregon',' Washington'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg/330px-Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg'
  });
animalList.push({
    name: "eastern indigo snake",
    type: 'Reptile',
    endangeredYear: 1990,
    locations: ['Alabama',' Florida',' Louisiana',' Mississippi',' South Carolina',' Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Eastern_Indigo_Snake.jpg/330px-Eastern_Indigo_Snake.jpg'
  });
animalList.push({
    name: "Blunt-nosed leopard lizard",
    type: 'Reptile',
    endangeredYear: 2012,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Gambelia_silus.gif'
  });
animalList.push({
    name: "Wood turtle",
    type: 'Reptile',
    endangeredYear: 2007,
    locations: ['Indiana',' Michigan',' Minnesota',' Virginia'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/N140_Sowerby_%26_Lear_1872_%28glyptemys_insculpta%29.jpg/330px-N140_Sowerby_%26_Lear_1872_%28glyptemys_insculpta%29.jpg'
  });
animalList.push({
    name: "Yellow Blotched map turtle",
    type: 'Reptile',
    endangeredYear: 1973,
    locations: ['Alabama',' Mississippi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Graptemys.flavimaculata.JPG/330px-Graptemys.flavimaculata.JPG'
  });
animalList.push({
    name: "Gopher tortoise",
    type: 'Reptile',
    endangeredYear: 1973,
    locations: ['Florida',' Georgia',' South Carolina'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Gopherus_polyphemus_%28side%29.jpg/330px-Gopherus_polyphemus_%28side%29.jpg'
  });
animalList.push({
    name: "Kemp's ridley sea turtle",
    type: 'Reptile',
    endangeredYear: 1970,
    locations: ['Alabama',' Florida',' Mississippi',' Louisiana',' Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lepidochelys_kempii.jpg/330px-Lepidochelys_kempii.jpg'
  });
animalList.push({
    name: "Olive ridley sea turtle",
    type: 'Reptile',
    endangeredYear: 1978,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg/375px-Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg'
  });
animalList.push({
    name: "Olive ridley sea turtle",
    type: 'Reptile',
    endangeredYear: 1978,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg/375px-Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg'
  });
animalList.push({
    name: "Alligator snapping turtle",
    type: 'Reptile',
    endangeredYear: 2006,
    locations: ['Kentucky',' Indiana',' Illinois',' Missouri',' Kansas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Alligator_snapping_turtle.jpg/330px-Alligator_snapping_turtle.jpg'
  });
animalList.push({
    name: "Florida sand skink",
    type: 'Reptile',
    endangeredYear: 1987,
    locations: ['Florida'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sand_Skink.jpg/330px-Sand_Skink.jpg'
  });
animalList.push({
    name: "Alabama red-bellied cooter",
    type: 'Reptile',
    endangeredYear: 1987,
    locations: ['Alabama',' Mississippi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Alabama_red-bellied_turtle_US_FWS_cropped.jpg/330px-Alabama_red-bellied_turtle_US_FWS_cropped.jpg'
  });
animalList.push({
    name: "San Esteban chuckwalla",
    type: 'Reptile',
    endangeredYear: 1973,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/San_Esteban_Island_Chuckwalla.jpg/330px-San_Esteban_Island_Chuckwalla.jpg'
  });
animalList.push({
    name: "Monito gecko",
    type: 'Reptile',
    endangeredYear: 1982,
    locations: ['Puerto Rico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Monito_gecko_Salamanquita_de_Monito_%285840026661%29.jpg/330px-Monito_gecko_Salamanquita_de_Monito_%285840026661%29.jpg'
  });
animalList.push({
    name: "Flattened musk turtle",
    type: 'Reptile',
    endangeredYear: 1973,
    locations: ['Alabama'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sternotherus_depressus.jpg/330px-Sternotherus_depressus.jpg'
  });
animalList.push({
    name: "Giant garter snake",
    type: 'Reptile',
    endangeredYear: 1993,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Giant_Garter_Snake_1.jpg/330px-Giant_Garter_Snake_1.jpg'
  });
animalList.push({
    name: "San Francisco garter snake",
    type: 'Reptile',
    endangeredYear: 1967,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Thamnophis_sirtalis_tetrataenia_%282005_10_16%29_-_uitsnede.jpg/330px-Thamnophis_sirtalis_tetrataenia_%282005_10_16%29_-_uitsnede.jpg'
  });
animalList.push({
    name: "Coachella Valley fringe-toed lizard",
    type: 'Reptile',
    endangeredYear: 1970,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Coachella_Valley_Fringe-toed_Lizard.JPG'
  });

animalList.push({
      name: 'Langes Metalmark Butterfly',
      type: 'Insect',
      endangeredYear: 1976,
      locations: ['California'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Apodemia_mormo_langei-02.JPG/1920px-Apodemia_mormo_langei-02.JPG'
  });
animalList.push({
    name: 'Hungerford Crawling Water Beetle',
    type: 'Insect',
    endangeredYear: 1994,
    locations: ['Michigan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Hungerford%27s_Crawling_Water_Beetle.jpg'
});
animalList.push({
    name: 'Salt Creek Tiger Beetle',
    type: 'Insect',
    endangeredYear: 2005,
    locations: ['Nebraska'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Salt_Creek_Tiger_Beetle.jpg'
});
animalList.push({
    name: 'Ohlone Tiger Beetle',
    type: 'Insect',
    endangeredYear: 2001,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Cicindela_ohlone.jpg'
});
animalList.push({
    name: 'Smith Blue Butterfly',
    type: 'Insect',
    endangeredYear: 1983,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Euphilotes_enoptes.jpeg'
});
animalList.push({
    name: 'Quino Checkerspot Butterfly',
    type: 'Insect',
    endangeredYear: 1997,
    locations: ['California'],
    image: 'http://www.butterfliesandmoths.org/sites/default/files/voucher_images/checker-spot16mg_0.jpg'
});
animalList.push({
    name: 'Karner Blue Butterfly',
    type: 'Insect',
    endangeredYear: 1976,
    locations: ['Michigan',' New Hampshire',' New Jersey',' New York',' Wisconsin'],
    image: 'https://s3.amazonaws.com/user-media.venngage.com/521792-fcae2a5b622474fdcfb36d1f2d4555bf.jpg'
});
animalList.push({
    name: 'Spruce-Fir Moss Spider',
    type: 'Insect',
    endangeredYear: 1995,
    locations: ['North Carolina',' Tennessee'],
    image: 'http://imagess3.enature.com/insects_spid/insects_spid_m/is0332_1m.jpg'
});
animalList.push({
    name: 'Mitchell Marsh Satyr',
    type: 'Insect',
    endangeredYear: 1973,
    locations: ['Ohio',' New Jersey',' Wisconsin'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Mitchell%27s_Satyr_butterfly.jpg'
});
animalList.push({
    name: 'American Burying Beetle',
    type: 'Insect',
    endangeredYear: 1989,
    locations: ['Arkansas',' Nebraska',' Ohio',' Oklahoma',' South Dakota'],
    image: 'https://www.fws.gov/midwest/endangered/images/insects/ambb/ambb2WayneNFReintroByUSFS.jpg'
});
animalList.push({
    name: 'Laguna Mountains Skipper',
    type: 'Insect',
    endangeredYear: 1976,
    locations: ['California',' Oregon',' Washington'],
    image: 'http://socalbutterflies.com/images/laguna_mt_skip_md.jpg'
});
animalList.push({
    name: 'Calippe Silverspot Butterfky',
    type: 'Insect',
    endangeredYear: 1997,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Speyeria_callippe_callippe.jpg/1280px-Speyeria_callippe_callippe.jpg'
});
animalList.push({
    name: 'Kretschmarr Cave Mold Beetle',
    type: 'Insect',
    endangeredYear: 1988,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rhadine_persephone_IMG_3763.jpg/440px-Rhadine_persephone_IMG_3763.jpg'
});
animalList.push({
    name: 'Bee Creek Cave Harvestman',
    type: 'Insect',
    endangeredYear: 1988,
    locations: ['Texas'],
    image: 'http://68.media.tumblr.com/36f60d3cfe135a90aea361c8e5aa0c0d/tumblr_mnmtf9lJMw1rxyvj1o2_540.jpg'
});
animalList.push({
    name: 'Zayante Band-Winged Grasshopper',
    type: 'Insect',
    endangeredYear: 2000,
    locations: ['California'],
    image: 'https://c1.staticflickr.com/9/8179/7926358150_5443410717_b.jpg'
});
animalList.push({
    name: 'Hawaiian Yellow-Faced Bee',
    type: 'Insect',
    endangeredYear: 2016,
    locations: ['Hawaii'],
    image: 'http://cdn.inquisitr.com/wp-content/uploads/2016/10/Endangered-species-list-honey-bees.jpg'
});

animalList.push({
    name: "Shortnose Sturgeon",
    type: 'Fish',
    endangeredYear: 1967,
    locations: ['Florida', ' Massachusetts', ' South Carolina'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Acipenser_brevirostrum_head.jpg/520px-Acipenser_brevirostrum_head.jpg'
  });
  animalList.push({
    name: "Gulf Sturgeon",
    type: 'Fish',
    endangeredYear: 1991,
    locations: ['Florida', ' Louisiana', ' Gulf of Mexico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/07-07-31_Boat%26Sturgeon.jpg/508px-07-07-31_Boat%26Sturgeon.jpg'
  });
  animalList.push({
    name: "Ozark Cavefish",
    type: 'Fish',
    endangeredYear: 1984,
    locations: ['Missouri'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Amblyopsis_rosae.jpg'
  });
  animalList.push({
    name: "Modoc Sucker",
    type: 'Fish',
    endangeredYear: 1985,
    locations: ['California', ' Oregon'],
    image: 'http://www.desertfishes.org/dfc/na/catostom/catostom/cmicrops/cmicrop1.jpg'
  });
  animalList.push({
    name: "Santa Ana Sucker",
    type: 'Fish',
    endangeredYear: 2000,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Catostomus_santaanae.jpg/440px-Catostomus_santaanae.jpg'
  });
  animalList.push({
    name: "Warner Sucker",
    type: 'Fish',
    endangeredYear: 1985,
    locations: ['Oregon'],
    image: 'https://www.fws.gov/oregonfwo/images/secondary_banner/Catostomus_warnerensisFWS.jpg'
  });
  animalList.push({
    name: "Shortnose Sucker",
    type: 'Fish',
    endangeredYear: 1988,
    locations: ['California', ' Oregon'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Chasmistes_brevirostris.png'
  });
  animalList.push({
    name: "Cui-ui",
    type: 'Fish',
    endangeredYear: 2014,
    locations: ['Nevada'],
    image: 'http://www.azflyfishing.net/azffgallery/albums/userpics/P3171250.JPG'
  });
  animalList.push({
    name: "June Sucker",
    type: 'Fish',
    endangeredYear: 1986,
    locations: ['Utah'],
    image: 'https://ecos.fws.gov/docs/species_images/doc4857.jpg'
  });
  animalList.push({
    name: "White River Springfish",
    type: 'Fish',
    endangeredYear: 1985,
    locations: ['Nevada'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Crenichthys_baileyi_moapae.jpg/440px-Crenichthys_baileyi_moapae.jpg'
  });
  animalList.push({
    name: "Railroad Valley Springfish",
    type: 'Fish',
    endangeredYear: 1986,
    locations: ['Nevada'],
    image: 'https://www.fws.gov/nevada/protected_species/fish/images/rrvsf.gif'
  });
  animalList.push({
    name: "Diamond Darter",
    type: 'Fish',
    endangeredYear: 1973,
    locations: ['Ohio', ' West Virginia'],
    image: 'https://en.wikipedia.org/wiki/Diamond_darter'
  });
  animalList.push({
    name: "Blue Shiner",
    type: 'Fish',
    endangeredYear: 1995,
    locations: ['Alabama', ' Georgia', ' Tennessee'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cyprinella_caerulea.jpg/440px-Cyprinella_caerulea.jpg'
  });
  animalList.push({
    name: "Beautiful Shiner",
    type: 'Fish',
    endangeredYear: 1969,
    locations: ['Arizona', ' New Mexico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Beautiful_Shiner%2C_juvenile%2C_Cyprinella_formosa.jpg/440px-Beautiful_Shiner%2C_juvenile%2C_Cyprinella_formosa.jpg'
  });
  animalList.push({
    name: "Leon Springs Pupfish",
    type: 'Fish',
    endangeredYear: 1980,
    locations: ['Texas'],
    image: 'http://tpwd.texas.gov/huntwild/wild/images/fish/leonspf.jpg'
  });
  animalList.push({
    name: "Devils Hole Pupfish",
    type: 'Fish',
    endangeredYear: 1967,
    locations: ['Nevada'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Cyprinodon_diabolis.jpg'
  });
  animalList.push({
    name: "Comanche Springs Pupfish",
    type: 'Fish',
    endangeredYear: 1996,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Comanche_Springs_pupfish.jpg'
  });
  animalList.push({
    name: "Desert Pupfish",
    type: 'Fish',
    endangeredYear: 1986,
    locations: ['Arizona', ' California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Male_female_mecularius.jpg/440px-Male_female_mecularius.jpg'
  });
  animalList.push({
    name: "Owens pupfish",
    type: 'Fish',
    endangeredYear: 2010,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Owens_pupfish_%28Cyprinodon_radiosus%29.jpg/440px-Owens_pupfish_%28Cyprinodon_radiosus%29.jpg'
  });
  animalList.push({
    name: "Lost River sucker",
    type: 'Fish',
    endangeredYear: 1988,
    locations: ['California', ' Oregon'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Delistes_luxatus_usgs.jpg'
  });
  animalList.push({
    name: "Devil's River Minnow",
    type: 'Fish',
    endangeredYear: 1999,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Dionda_diaboli_in_hand_w150.jpg'
  });
  animalList.push({
    name: "Desert Dace",
    type: 'Fish',
    endangeredYear: 1986,
    locations: ['Nevada'],
    image: 'https://www.fws.gov/uploadedImages/Region_8/NWRS/Zone_1/Desert_Complex/Moapa_Valley/Images/Article_Photos/Moapa%20dace-519%20promo.jpg'
  });
  animalList.push({
    name: "Slender Chub",
    type: 'Fish',
    endangeredYear: 1996,
    locations: ['Tennessee', ' Virginia'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Slender_chub_fish_erimystax_cahni.jpg/440px-Slender_chub_fish_erimystax_cahni.jpg'
  });
  animalList.push({
    name: "Slackwater Darter",
    type: 'Fish',
    endangeredYear: 1977,
    locations: ['Alabama', ' Tennessee'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Etheostoma_boschungi.jpg/440px-Etheostoma_boschungi.jpg'
  });
  animalList.push({
    name: "Watercress Darter",
    type: 'Fish',
    endangeredYear: 1999,
    locations: ['Alabama'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Watercress_Darter.jpg'
  });
  animalList.push({
    name: "Okaloosa Darter",
    type: 'Fish',
    endangeredYear: 1973,
    locations: ['Florida'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Etheostoma_okaloosae.jpg/440px-Etheostoma_okaloosae.jpg'
  });
  animalList.push({
    name: "Boulder Darter",
    type: 'Fish',
    endangeredYear: 1988,
    locations: ['Alabama', ' Tennessee'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Etheostoma_wapiti.jpg/440px-Etheostoma_wapiti.jpg'
  });
  animalList.push({
    name: "Northern Tidewater Goby",
    type: 'Fish',
    endangeredYear: 1994,
    locations: ['California'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Eucyclogobius_newberryi.jpg/440px-Eucyclogobius_newberryi.jpg'
  });
  animalList.push({
    name: "Big Bend Gambusia",
    type: 'Fish',
    endangeredYear: 1996,
    locations: ['Texas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Gambusia_gaigei_01.jpg/440px-Gambusia_gaigei_01.jpg'
  });
  animalList.push({
    name: "Clear Creek Gambusia",
    type: 'Fish',
    endangeredYear: 1967,
    locations: ['Texas'],
    image: 'http://www.fishesoftexas.org/media/attachments/taxa/images/web/13976.jpg'
  });
  animalList.push({
    name: "Pecos gambusia",
    type: 'Fish',
    endangeredYear: 1996,
    locations: ['New Mexico', 'Texas'],
    image: 'http://tpwd.texas.gov/huntwild/wild/images/fish/pecosgam.jpg'
  });
  animalList.push({
    name: "Mohave Tui Chub",
    type: 'Fish',
    endangeredYear: 1970,
    locations: ['California', ' Nevada'],
    image: 'https://www.wildlife.ca.gov/portals/0/Images/R6/desert_fish_images/R6_DesertFish_MohaveTui_1.jpg'
  });
  animalList.push({
    name: "Borax Lake Chub",
    type: 'Fish',
    endangeredYear: 1982,
    locations: ['Oregon'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Borax_lake_chub.jpg'
  });
  animalList.push({
    name: "Humpback Chub",
    type: 'Fish',
    endangeredYear: 1976,
    locations: ['Arizona', ' Utah'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gila_cypha.jpg/440px-Gila_cypha.jpg'
  });
  animalList.push({
    name: "Sonora Chub",
    type: 'Fish',
    endangeredYear: 1996,
    locations: ['Arizon'],
    image: 'http://elaribabi.com/wp-content/uploads/2013/09/Sonora-chub-Rancho-Aribabi-D45.jpg'
  });
  animalList.push({
    name: "Bonytail Chub",
    type: 'Fish',
    endangeredYear: 1982,
    locations: ['Wyoming', ' Colorado', ' Utah', ' New Mexico', ' Arizona', ' California'],
    image: 'https://www.fws.gov/nevada/protected_species/fish/images/bt_chub.gif'
  });
  animalList.push({
    name: "Gila Intermedia",
    type: 'Fish',
    endangeredYear: 1996,
    locations: ['Arizona'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gila_intermedia_Gratwicke.jpg/440px-Gila_intermedia_Gratwicke.jpg'
  });
  animalList.push({
    name: "Chihuahua Chub",
    type: 'Fish',
    endangeredYear: 1983,
    locations: ['New Mexico'],
    image: 'https://ecos.fws.gov/docs/species_images/doc4894.jpg'
  });
  animalList.push({
    name: "Yaqui Chub",
    type: 'Fish',
    endangeredYear: 1984,
    locations: ['Arizona'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gila_purpurea.jpg/440px-Gila_purpurea.jpg'
  });
  animalList.push({
    name: "Gila Seminuda",
    type: 'Fish',
    endangeredYear: 1989,
    locations: ['Arizona', ' Nevada', ' Utah'],
    image: 'https://www.fws.gov/southwest/es/arizona/images/SpeciesImages/Gila_Chub1_Dugas_AZ6_8_82.jpg'
  });
  animalList.push({
    name: "Rio Grande Silvery Minnow",
    type: 'Fish',
    endangeredYear: 1994,
    locations: ['Texas'],
    image: 'https://ecos.fws.gov/docs/species_images/doc4976.jpg'
  });
  animalList.push({
    name: "Delta Smelt",
    type: 'Fish',
    endangeredYear: 1993,
    locations: ['Oregon'],
    image: 'https://ecos.fws.gov/docs/species_images/doc4900.jpg'
  });
  animalList.push({
    name: "Yaqui Catfish",
    type: 'Fish',
    endangeredYear: 1984,
    locations: ['Arizona'],
    image: 'https://www.nies.go.jp/biodiversity/invasive/DB/image/photo/50120_b.jpg'
  });
  animalList.push({
    name: "White River spinedace",
    type: 'Fish',
    endangeredYear: 1985,
    locations: ['California', ' Nevada'],
    image: 'http://dingo.care2.com/pictures/petition_images/petition/499/514382-1403118215-wide.jpg'
  });


db.Animal.remove({}, function(err, animals) {
  console.log('removed all Animal');
  db.Animal.create(animalList, function(err, animals){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all animals');
    console.log("created", animals.length, "animals");
    process.exit();
  })
});
