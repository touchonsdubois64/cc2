// ==================================================
// BIBLIOTHÈQUE DES POSITIONS
// ==================================================
//
// Chaque position est un objet avec :
//
//    id    = identifiant unique (texte libre, sans espace,
//            utilisé aussi pour l'image d'indice éventuelle
//            dans images/hints/<id>.png)
//
//    title = titre affiché dans le menu final et dans
//            l'export PGN
//
//    fen   = position de départ (notation FEN)
//
//    tags  = objet libre { cle: valeur, ... } servant à
//            classer et retrouver la position. Ajoutez les
//            clés que vous voulez (categorie, auteur, annee,
//            niveau, source, thème...), et laissez une clé
//            de côté si elle ne s'applique pas à une position
//            (elle apparaîtra alors sous "Non renseigné").
//
// Pour ajouter une position : copiez un bloc, changez id,
// title, fen et tags. L'ordre des positions dans ce fichier
// n'a plus d'importance pour l'affichage : le dernier menu
// est trié automatiquement par complexité croissante
// (nombre de pions dans le FEN).
// ==================================================

export const positions = [

            {
        id: 'ebersz-01',
        title: 'Ebersz (Magyar Sakkvilag, 1930)',
        fen: '8/1p5k/1P1p4/3p4/3Pp2p/2K1P2p/7P/8 w - - 0 1',
        tags: {
            Auteur: 'K. Ebersz',
            'Année': '1930',
            'Référence': 'Magyar Sakkvilag',
            Task: 'Les Blancs jouent et annulent',
            'Complexité': '6+4',
            'Ilôts': '3 ilôts',
            Fronts: '2 fronts',
            Blocage: 'Pions bloqués',
            Tempo: 'sans tempo de réserve',
            'Contre-Attaque': 'sans contre-attaque',
            'Positions': '1. Position d’Ebersz',
            'Type géométrique': 'Système Multiquadratique (13C)',
            'Dégénérescence': 'sans dégénérescence',
            'Excès de Conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'ebersz-02',
        title: 'Ebersz (Magyar Sakkvilag, 1930)',
        fen: '7k/p7/P2p4/P2Pp3/4P3/4P1p1/6P1/K7 w - - 0 1',
        tags: {
            Auteur: 'K. Ebersz',
            'Année': '1930',
            'Référence': 'Magyar Sakkvilag',
            Task: 'Les Blancs jouent et gagnent',
            'Complexité': '6+4',
            'Ilôts': '3 ilôts',
            Fronts: '2 fronts',
            Blocage: 'Pions bloqués',
            Tempo: 'sans tempo de réserve',
            'Contre-Attaque': 'sans contre-attaque',
            'Positions': '1. Position d’Ebersz',
            'Type géométrique': 'Système Multiquadratique (13C)',
            'Dégénérescence': 'sans dégénérescence',
            'Excès de Conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-02',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/1p6/pP2p3/Pp2P3/1P2P1p1/1K4P1/8/8 w - - 0 1',
        tags: {
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            'Complexité': '6+5',
            'Ilôts': '3 ilôts',
            Fronts: '2 fronts',
            Blocage: 'Pions bloqués',
            Tempo: 'sans tempo de réserve',
            'Contre-Attaque': 'sans contre-attaque',
            'Positions': '2. Autres positions',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            'Dégénérescence': 'avec dégénérescence',
            'Excès de Conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-01',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/1p5k/1P2p3/1P2P3/4P1p1/5pP1/5P2/1K6 w - - 0 1',
        tags: {
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            'Complexité': '6+4',
            'Ilôts': '2 ilôts',
            Fronts: '2 fronts',
            Blocage: 'Pions bloqués',
            Tempo: 'sans tempo de réserve',
            'Contre-Attaque': 'sans contre-attaque',
            'Positions': '2. Autres positions',
            'Type géométrique': 'Système Quadratique (Q)',
            'Dégénérescence': 'sans dégénérescence',
            'Excès de Conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-01',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1p5k/1P2p3/1P2P3/4P1p1/5pP1/K4P2/8 w - - 0 1',
        tags: {
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            'Complexité': '6+4',
            'Ilôts': '2 ilôts',
            Fronts: '2 fronts',
            Blocage: 'Pions bloqués',
            Tempo: 'sans tempo de réserve',
            'Contre-Attaque': 'sans contre-attaque',
            'Positions': '2. Autres positions',
            'Type géométrique': 'Système Quadratique (Q)',
            'Dégénérescence': 'sans dégénérescence',
            'Excès de Conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bianchetti-01',
        title: 'Bianchetti (L\'Italia Scacchistica, 1925)',
        fen: '7k/1p6/1P2p3/1P2P3/4P1p1/6P1/8/K7 w - - 0 1',
        tags: {
            Auteur: 'R. Bianchetti',
            'Année': '1925',
            'Référence': 'L\'Italia Scacchistica',
            Task: 'Les Blancs jouent et gagnent',
            'Complexité': '5+3',
            'Ilôts': '3 ilôts',
            Fronts: '2 fronts',
            Blocage: 'Pions bloqués',
            Tempo: 'sans tempo de réserve',
            'Contre-Attaque': 'sans contre-attaque',
            'Positions': '2. Autres positions',
            'Type géométrique': 'Système à 8 Cases (8C)',
            'Dégénérescence': 'sans dégénérescence',
            'Excès de Conjugaison': 'sans excès de conjugaison'
        }
    },



];


// ==================================================
// ORDRE DES TAGS = ORDRE DES MENUS DÉROULANTS
// ==================================================
//
// Cette liste pilote entièrement l'interface :
//
//   - le nombre de valeurs dans ce tableau détermine le
//     nombre de menus déroulants successifs affichés ;
//
//   - l'ordre des valeurs détermine l'ordre d'apparition
//     des menus, du premier affiché d'emblée jusqu'au
//     dernier ;
//
//   - le DERNIER tag de la liste est particulier : il ne
//     crée pas un menu de valeurs, mais donne directement
//     le menu final listant les positions correspondantes,
//     triées par complexité croissante (nombre de pions).
//
// Exemples :
//
//   ['categorie']
//       -> un seul menu, qui liste directement toutes les
//          positions triées par nombre de pions.
//
//   ['categorie', 'auteur']
//       -> 1er menu : catégorie de conjugaison
//          2e menu (final) : positions de cette catégorie,
//          triées par complexité (le tag "auteur" ne sert
//          donc plus ici qu'à activer ce 2e niveau).
//
//   ['categorie', 'auteur', 'annee']
//       -> 1er menu : catégorie
//          2e menu : auteur (parmi les positions de la
//          catégorie choisie)
//          3e menu (final) : positions correspondant à la
//          catégorie et à l'auteur choisis, triées par
//          complexité.
//
// Pour changer la hiérarchie, changez simplement l'ordre
// ou le contenu de ce tableau — aucune autre modification
// n'est nécessaire ailleurs dans le code.
// ==================================================

export const tagOrder = ['Positions'];
