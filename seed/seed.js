console.log ('This seed file is a-go!')
var db = require("./models");

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var animalList = [];
  animalList.push({
      name: "California Tiger Salamander",
      type: 'Amphibians',
      endangeredYear: 2004,
      locations: ['California'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/California_Tiger_Salamander.jpg/1599px-California_Tiger_Salamander.jpg'
    });
    animalList.push({
      name: "Houston Toad",
      type: 'Amphibians',
      endangeredYear: 1970,
      locations: ['Texas'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Houston_toad.jpg/440px-Houston_toad.jpg'
    });
    animalList.push({
      name: "Barton Springs Salamander",
      type: 'Amphibians',
      endangeredYear: 1997,
      locations: ['Texas'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/BartonSpringsSalamander.jpeg'
    });
    animalList.push({
      name: "Shenandoah Salamander",
      type: 'Amphibians',
      endangeredYear: 1989,
      locations: ['Virginia'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Shenandoah_Salamander_03.jpg/440px-Shenandoah_Salamander_03.jpg'
    });
    animalList.push({
      name: "Mountain Yellow-Legged Frog",
      type: 'Amphibians',
      endangeredYear: 2013,
      locations: ['California'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Rana_muscosa.jpg'
    });
    animalList.push({
      name: "Sierra Nevada Yellow-Legged Frog",
      type: 'Amphibians',
      endangeredYear: 2014,
      locations: ['California'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Rana_sierrae01.jpg/440px-Rana_sierrae01.jpg'
    });
    animalList.push({
      name: "Texas Blind Salamander",
      type: 'Amphibians',
      endangeredYear: 1967,
      locations: ['Texas'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Texas_blind_salamander.jpg/480px-Texas_blind_salamander.jpg'
    });

    animalList.push({
          name: 'Mexican Wolf',
          type: 'Mammal',
          endangeredYear: 1976,
          locations: ['Arizona','New Mexico','Texas'],
          image: 'https://en.wikipedia.org/wiki/Mexican_wolf#/media/File:Mexican_Wolf_2_yfb-edit_1.jpg'
      });
      animalList.push({
          name: 'Red Wolf',
          type: 'Mammal',
          endangeredYear: 1996,
          locations: ['Florida','Mississippi'],
          image: 'https://en.wikipedia.org/wiki/Red_wolf#/media/File:07-03-23RedWolfAlbanyGAChehaw.jpg'
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
          image: 'https://en.wikipedia.org/wiki/Giant_kangaroo_rat#/media/File:Dipodomys_ingens.jpg'
      });
      animalList.push({
          name: 'San Bernardino Merriams Kangaroo Rat',
          type: 'Mammal',
          endangeredYear: 1998,
          locations: ['Arizona','California','New Mexico', 'Texas'],
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
          locations: ['Arizona', 'South Dakota', 'Wyoming'],
          image: 'https://en.wikipedia.org/wiki/Black-footed_ferret#/media/File:Mustela_nigripes_2.jpg'
      });
      animalList.push({
          name: 'Gray Bat',
          type: 'Mammal',
          endangeredYear: 2004,
          locations: ['Alabama','Mississippi'],
          image: 'https://www.fws.gov/midwest/endangered/images/mammals/grba_female_MonroeCoKY7Aug06.jpg'
      });
      animalList.push({
          name: 'Indiana Bat',
          type: 'Mammal',
          endangeredYear: 1967,
          locations: ['Indiana','Kentucky'],
          image: 'http://www.redorbit.com/media/uploads/2012/09/Daubentons-Bat-Myotis-daubentonii.jpg'
      });
      animalList.push({
          name: 'Marsh Rice Rat',
          type: 'Mammal',
          endangeredYear: 2009,
          locations: ['Florida', 'Louisiana','Kansas','New Jersey','Texas'],
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
          locations: ['Idaho', 'Washington'],
          image: 'https://en.wikipedia.org/wiki/Migratory_woodland_caribou#/media/File:Reindeer_licking_salt_from_roadway.jpg'
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
          image: 'https://en.wikipedia.org/wiki/West_Indian_manatee#/media/File:Manatee_with_calf.PD_-_colour_corrected.jpg'
      });
      animalList.push({
          name: 'Island Fox',
          type: 'Mammal',
          endangeredYear: 2004,
          locations: ['California'],
          image: 'https://en.wikipedia.org/wiki/Island_fox#/media/File:Urocyon_littoralis_pair.jpg'
      });
      animalList.push({
          name: 'Kit Fox',
          type: 'Mammal',
          endangeredYear: 1967,
          locations: ['Arizona','California','Colorado','Nevada','New Mexico','Utah','Texas'],
          image: 'https://en.wikipedia.org/wiki/Kit_fox#/media/File:San_Joaquin_Kit_fox_B-40-13_08_20_1993.jpg'
      });
      animalList.push({
          name: 'Florida Panther',
          type: 'Mammal',
          endangeredYear: 1973,
          locations: ['Florida'],
          image: 'http://www.newyorker.com/wp-content/uploads/2015/09/OConnor-Florida-Panthers-1200.jpg'
      });


      animalList.push({
          name: 'Yellow Shouldered Blackbird',
          type: 'Birds',
          endangeredYear: 1976,
          locations: ['Puerto Rico'],
          image: 'https://en.wikipedia.org/wiki/Yellow-shouldered_blackbird#/media/File:Yellow-shouldered_Blackbird_5_Mike_Morel.jpg'
        });
      animalList.push({
          name: 'Whooping Crane',
          type: 'Birds',
          endangeredYear: 1967,
          locations: ['Florida','Portland','Texas','Wisconsin'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grus_americana_Sasata.jpg/330px-Grus_americana_Sasata.jpg'
        });
      animalList.push({
          name: 'California Condor',
          type: 'Birds',
          endangeredYear: 1987,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Condor_in_flight.JPG/800px-Condor_in_flight.JPG'
        });
      animalList.push({
          name: "Kirtland's warbler",
          type: 'Birds',
          endangeredYear: 1973,
          locations: ['Michigan','Wisconsin'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dendroica_kirtlandii_-Michigan%2C_USA_-male-8_%285%29.jpg/330px-Dendroica_kirtlandii_-Michigan%2C_USA_-male-8_%285%29.jpg'
        });
      animalList.push({
          name: "Ivory-billed woodpecker",
          type: 'Birds',
          endangeredYear: 1973,
          locations: ['Arkansas','Louisiana','Mississippi','Florida'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ivory-billed_Woodpecker_by_Jerry_A._Payne.jpg/390px-Ivory-billed_Woodpecker_by_Jerry_A._Payne.jpg'
        });
      animalList.push({
          name: "Saint Croix ground lizard",
          type: 'Reptiles',
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
          type: 'Reptiles',
          endangeredYear: 1977,
          locations: ['Puerto Rico'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/330px-Loggerhead_sea_turtle.jpg'
        });
      animalList.push({
          name: "Spotted turtle",
          type: 'Reptiles',
          endangeredYear: 2012,
          locations: ['Illinois','Indiana','Michigan','North Carolina','Ohio','South Carolina'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Clemmys_guttataHolbrookV1P11A_Flipped.jpg/330px-Clemmys_guttataHolbrookV1P11A_Flipped.jpg'
        });
      animalList.push({
          name: "American Crocodile",
          type: 'Reptiles',
          endangeredYear: 2007,
          locations: ['Florida'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg/330px-Crocodylus_acutus_mexico_02-edit1.jpg'
        });
      animalList.push({
          name: "New Mexico ridgenosed rattlesnake",
          type: 'Reptiles',
          endangeredYear: 1973,
          locations: ['Arizona','New Mexico'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Ridgenose.jpg'
        });
      animalList.push({
          name: "Mona ground iguana",
          type: 'Reptiles',
          endangeredYear: 1977,
          locations: ['Puerto Rico'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Iguana_sitting_down_looking_to_the_left.jpg/330px-Iguana_sitting_down_looking_to_the_left.jpg'
        });
      animalList.push({
          name: "Leatherback sea turtle",
          type: 'Reptiles',
          endangeredYear: 1970,
          locations: ['California','Costa Rica','Florida','Oregon','Washington'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg/330px-Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg'
        });
      animalList.push({
          name: "eastern indigo snake",
          type: 'Reptiles',
          endangeredYear: 1990,
          locations: ['Alabama','Florida','Louisiana','Mississippi','South Carolina','Texas'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Eastern_Indigo_Snake.jpg/330px-Eastern_Indigo_Snake.jpg'
        });
      animalList.push({
          name: "Blunt-nosed leopard lizard",
          type: 'Reptiles',
          endangeredYear: 2012,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Gambelia_silus.gif'
        });
      animalList.push({
          name: "Wood turtle",
          type: 'Reptiles',
          endangeredYear: 2007,
          locations: ['Indiana','Michigan','Minnesota','Virginia'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/N140_Sowerby_%26_Lear_1872_%28glyptemys_insculpta%29.jpg/330px-N140_Sowerby_%26_Lear_1872_%28glyptemys_insculpta%29.jpg'
        });
      animalList.push({
          name: "Yellow Blotched map turtle",
          type: 'Reptiles',
          endangeredYear: 1973,
          locations: ['Alabama','Mississippi'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Graptemys.flavimaculata.JPG/330px-Graptemys.flavimaculata.JPG'
        });
      animalList.push({
          name: "Gopher tortoise",
          type: 'Reptiles',
          endangeredYear: 1973,
          locations: ['Florida','Georgia','South Carolina'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Gopherus_polyphemus_%28side%29.jpg/330px-Gopherus_polyphemus_%28side%29.jpg'
        });
      animalList.push({
          name: "Kemp's ridley sea turtle",
          type: 'Reptiles',
          endangeredYear: 1970,
          locations: ['Alabama','Florida','Mississippi','Louisiana','Texas'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lepidochelys_kempii.jpg/330px-Lepidochelys_kempii.jpg'
        });
      animalList.push({
          name: "Olive ridley sea turtle",
          type: 'Reptiles',
          endangeredYear: 1978,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg/375px-Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg'
        });
      animalList.push({
          name: "Olive ridley sea turtle",
          type: 'Reptiles',
          endangeredYear: 1978,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg/375px-Turtle_golfina_escobilla_oaxaca_mexico_claudio_giovenzana_2010.jpg'
        });
      animalList.push({
          name: "Alligator snapping turtle",
          type: 'Reptiles',
          endangeredYear: 2006,
          locations: ['Kentucky','Indiana','Illinois','Missouri','Kansas'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Alligator_snapping_turtle.jpg/330px-Alligator_snapping_turtle.jpg'
        });
      animalList.push({
          name: "Florida sand skink",
          type: 'Reptiles',
          endangeredYear: 1987,
          locations: ['Florida'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sand_Skink.jpg/330px-Sand_Skink.jpg'
        });
      animalList.push({
          name: "Alabama red-bellied cooter",
          type: 'Reptiles',
          endangeredYear: 1987,
          locations: ['Alabama','Mississippi'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Alabama_red-bellied_turtle_US_FWS_cropped.jpg/330px-Alabama_red-bellied_turtle_US_FWS_cropped.jpg'
        });
      animalList.push({
          name: "San Esteban chuckwalla",
          type: 'Reptiles',
          endangeredYear: 1973,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/San_Esteban_Island_Chuckwalla.jpg/330px-San_Esteban_Island_Chuckwalla.jpg'
        });
      animalList.push({
          name: "Monito gecko",
          type: 'Reptiles',
          endangeredYear: 1982,
          locations: ['Puerto Rico'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Monito_gecko_Salamanquita_de_Monito_%285840026661%29.jpg/330px-Monito_gecko_Salamanquita_de_Monito_%285840026661%29.jpg'
        });
      animalList.push({
          name: "Flattened musk turtle",
          type: 'Reptiles',
          endangeredYear: 1973,
          locations: ['Alabama'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sternotherus_depressus.jpg/330px-Sternotherus_depressus.jpg'
        });
      animalList.push({
          name: "Giant garter snake",
          type: 'Reptiles',
          endangeredYear: 1993,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Giant_Garter_Snake_1.jpg/330px-Giant_Garter_Snake_1.jpg'
        });
      animalList.push({
          name: "San Francisco garter snake",
          type: 'Reptiles',
          endangeredYear: 1967,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Thamnophis_sirtalis_tetrataenia_%282005_10_16%29_-_uitsnede.jpg/330px-Thamnophis_sirtalis_tetrataenia_%282005_10_16%29_-_uitsnede.jpg'
        });
      animalList.push({
          name: "Coachella Valley fringe-toed lizard",
          type: 'Reptiles',
          endangeredYear: 1970,
          locations: ['California'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Coachella_Valley_Fringe-toed_Lizard.JPG'
        });

animalList.push({
      name: 'Langes Metalmark Butterfly',
      type: 'Insects and Arachnids',
      endangeredYear: 1976,
      locations: ['California'],
      image: 'https://en.wikipedia.org/wiki/Apodemia_mormo_langei#/media/File:Apodemia_mormo_langei-02.JPG'
  });
  animalList.push({
      name: 'Hungerford Crawling Water Beetle',
      type: 'Insects and Arachnids',
      endangeredYear: 1994,
      locations: ['Michegan'],
      image: 'http://mnrsar.cat.webfeat.com/images/mnr_sar_hng_crw_wtr_btl_2.jpg'
  });
  animalList.push({
      name: 'Salt Creek Tiger Beetle',
      type: 'Insects and Arachnids',
      endangeredYear: 2005,
      locations: ['Nebraska'],
      image: 'https://en.wikipedia.org/wiki/Salt_Creek_tiger_beetle#/media/File:Salt_Creek_Tiger_Beetle.jpg'
  });
  animalList.push({
      name: 'Ohlone Tiger Beetle',
      type: 'Insects and Arachnids',
      endangeredYear: 2001,
      locations: ['California'],
      image: 'https://en.wikipedia.org/wiki/Ohlone_tiger_beetle#/media/File:Cicindela_ohlone.jpg'
  });
  animalList.push({
      name: 'Smith Blue Butterfly',
      type: 'Insects and Arachnids',
      endangeredYear: 1983,
      locations: ['California'],
      image: 'https://en.wikipedia.org/wiki/Smith%27s_blue_butterfly#/media/File:Euphilotes_enoptes.jpeg'
  });
  animalList.push({
      name: 'Quino Checkerspot Butterfly',
      type: 'Insects and Arachnids',
      endangeredYear: 1997,
      locations: ['California'],
      image: 'https://www.google.com/search?q=quino+checkerspot+butterfly&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwj9qZK_mdzTAhXng1QKHVwZA_YQiR4IhwE&biw=1440&bih=803#imgrc=SzZXZA09DVsdNM:'
  });
  animalList.push({
      name: 'Karner Blue Butterfly',
      type: 'Insects and Arachnids',
      endangeredYear: 1976,
      locations: ['Michegan','New Hampshire','New Jersey','New York','Wisconsin'],
      image: 'https://s3.amazonaws.com/user-media.venngage.com/521792-fcae2a5b622474fdcfb36d1f2d4555bf.jpg'
  });
  animalList.push({
      name: 'Spruce-Fir Moss Spider',
      type: 'Insects and Arachnids',
      endangeredYear: 1995,
      locations: ['North Carolina','Tennessee'],
      image: 'http://imagess3.enature.com/insects_spid/insects_spid_m/is0332_1m.jpg'
  });
  animalList.push({
      name: 'Mitchell Marsh Satyr',
      type: 'Insects and Arachnids',
      endangeredYear: 1973,
      locations: ['Ohio','New Jersey','Wisconsin'],
      image: 'https://en.wikipedia.org/wiki/Neonympha_mitchellii#/media/File:Mitchell%27s_Satyr_butterfly.jpg'
  });
  animalList.push({
      name: 'American Burying Beetle',
      type: 'Insects and Arachnids',
      endangeredYear: 1989,
      locations: ['Arkansas','Nebraska','Ohio','Oklahoma','South Dakota'],
      image: 'https://www.fws.gov/midwest/endangered/images/insects/ambb/ambb2WayneNFReintroByUSFS.jpg'
  });
  animalList.push({
      name: 'Laguna Mountains Skipper',
      type: 'Insects and Arachnids',
      endangeredYear: 1976,
      locations: ['California','Oregon','Washington'],
      image: 'http://socalbutterflies.com/images/laguna_mt_skip_md.jpg'
  });
  animalList.push({
      name: 'Calippe Silverspot Butterfky',
      type: 'Insects and Arachnids',
      endangeredYear: 1997,
      locations: ['California'],
      image: 'https://en.wikipedia.org/wiki/Callippe_silverspot_butterfly#/media/File:Speyeria_callippe_callippe.jpg'
  });
  animalList.push({
      name: 'Kretschmarr Cave Mold Beetle',
      type: 'Insects and Arachnids',
      endangeredYear: 1988,
      locations: ['Texas'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rhadine_persephone_IMG_3763.jpg/440px-Rhadine_persephone_IMG_3763.jpg'
  });
  animalList.push({
      name: 'Bee Creek Cave Harvestman',
      type: 'Insects and Arachnids',
      endangeredYear: 1988,
      locations: ['Texas'],
      image: 'http://68.media.tumblr.com/36f60d3cfe135a90aea361c8e5aa0c0d/tumblr_mnmtf9lJMw1rxyvj1o2_540.jpg'
  });
  animalList.push({
      name: 'Zayante Band-Winged Grasshopper',
      type: 'Insects and Arachnids',
      endangeredYear: 2000,
      locations: ['California'],
      image: 'https://c1.staticflickr.com/9/8179/7926358150_5443410717_b.jpg'
  });
  animalList.push({
      name: 'Hawaiian Yellow-Faced Bee',
      type: 'Insects and Arachnids',
      endangeredYear: 2016,
      locations: ['Hawaii'],
      image: 'http://cdn.inquisitr.com/wp-content/uploads/2016/10/Endangered-species-list-honey-bees.jpg'
  });
// remove animals first
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
