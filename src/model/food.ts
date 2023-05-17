export enum Food {
    EARLY_CARROT,
    CARROT,
    POTATO,
    BEETS,
    ONION,
    KOHLRABI,
    CHARD,
    CUCUMBER,
    GREEN_BEAN,
    EGG_PLANT,
    BELL_PEPPER,
    BROCCOLI,
    ZUCCHINI,
    ARTICHOKE,
    RADISH,
    ASPARAGUS,
    NEW_POTATO,
    PEAS,
    SPINACH,
    TURNIP,
    LEEK,
    CAULIFLOWER,
    SWEET_POTATO,
    JERUSALEM_ARTICHOKE,
    RUTABAGA,
    ENDIVE,
    CELERY_ROOT,
    CABBAGE,
    KALE,
    BRUSSELS_SPROUTS,
    RED_CABBAGE,
    SQUASH,
    PUMPKIN,
    BLACK_RADISH,
    PARSNIP,
    CELERY_BRANCH,
    FENNEL,
    CORN,
    ROMANESCO_CABBAGE,
    LETTUCE,
    BATAVIA,
    CEBETTE,
    MUSHROOMS,
    MANGO,
    LITCHI,
    HAZELNUT,
    PERSIMMON,
    QUINCE,
    CHESTNUT,
    GRAPE,
    LOQUAT,
    NECTARINE,
    MIRABELLE_PLUM,
    BLACKBERRY,
    BLUEBERRY,
    FIG,
    MELO,
    WATERMELON,
    APRICOT,
    PLUM,
    CURRANT,
    BLACKCURRANT,
    RASPBERRY,
    CHERRIES,
    PEACHES,
    CLEMENTINE,
    POMEGRANATE,
    ORANGE,
    PINEAPPLE,
    PEAR,
    AVOCADO,
    KIWI,
    APPLE,
    BANANA,
    RHUBARB,
    POMELO,
    STRAWBERRY,
    CITRON,
    TOMATO
}

const FrenchTranslations: Record<Food, string> = {
    [Food.EARLY_CARROT]: 'Carotte précoce',
    [Food.CARROT]: 'Carotte',
    [Food.POTATO]: 'Pomme de terre',
    [Food.BEETS]: 'Betterave',
    [Food.ONION]: 'Oignon',
    [Food.KOHLRABI]: 'Chou-rave',
    [Food.CHARD]: 'Blettes',
    [Food.CUCUMBER]: 'Concombre',
    [Food.GREEN_BEAN]: 'Haricot vert',
    [Food.EGG_PLANT]: 'Aubergine',
    [Food.BELL_PEPPER]: 'Poivron',
    [Food.BROCCOLI]: 'Brocoli',
    [Food.ZUCCHINI]: 'Courgette',
    [Food.ARTICHOKE]: 'Artichaut',
    [Food.RADISH]: 'Radis',
    [Food.ASPARAGUS]: 'Asperge',
    [Food.NEW_POTATO]: 'Nouvelle pomme de terre',
    [Food.PEAS]: 'Pois',
    [Food.SPINACH]: 'Épinard',
    [Food.TURNIP]: 'Navet',
    [Food.LEEK]: 'Poireau',
    [Food.CAULIFLOWER]: 'Chou-fleur',
    [Food.SWEET_POTATO]: 'Patate douce',
    [Food.JERUSALEM_ARTICHOKE]: 'Topinambour',
    [Food.RUTABAGA]: 'Rutabaga',
    [Food.ENDIVE]: 'Endive',
    [Food.CELERY_ROOT]: 'Céleri-rave',
    [Food.CABBAGE]: 'Chou',
    [Food.KALE]: 'Chou frisé',
    [Food.BRUSSELS_SPROUTS]: 'Chou de Bruxelles',
    [Food.RED_CABBAGE]: 'Chou rouge',
    [Food.SQUASH]: 'Courge',
    [Food.PUMPKIN]: 'Citrouille',
    [Food.BLACK_RADISH]: 'Radis noir',
    [Food.PARSNIP]: 'Panais',
    [Food.CELERY_BRANCH]: 'Branche de céleri',
    [Food.FENNEL]: 'Fenouil',
    [Food.CORN]: 'Maïs',
    [Food.ROMANESCO_CABBAGE]: 'Chou romanesco',
    [Food.LETTUCE]: 'Laitue',
    [Food.BATAVIA]: 'Batavia',
    [Food.CEBETTE]: 'Cebette',
    [Food.MUSHROOMS]: 'Champignons',
    [Food.MANGO]: 'Mangue',
    [Food.LITCHI]: 'Litchi',
    [Food.HAZELNUT]: 'Noisette',
    [Food.PERSIMMON]: 'Persimmon',
    [Food.QUINCE]: 'Coing',
    [Food.CHESTNUT]: 'Châtaigne',
    [Food.GRAPE]: 'Raisin',
    [Food.LOQUAT]: 'Nèfle',
    [Food.NECTARINE]: 'Nectarine',
    [Food.MIRABELLE_PLUM]: 'Mirabelle',
    [Food.BLACKBERRY]: 'Mûre',
    [Food.BLUEBERRY]: 'Myrtille',
    [Food.FIG]: 'Figue',
    [Food.MELO]: 'Melon',
    [Food.WATERMELON]: 'Pastèque',
    [Food.APRICOT]: 'Abricot',
    [Food.PLUM]: 'Prune',
    [Food.CURRANT]: 'Groseille',
    [Food.BLACKCURRANT]: 'Cassis',
    [Food.RASPBERRY]: 'Framboise',
    [Food.CHERRIES]: 'Cerises',
    [Food.PEACHES]: 'Pêches',
    [Food.CLEMENTINE]: 'Clémentine',
    [Food.POMEGRANATE]: 'Grenade',
    [Food.ORANGE]: 'Orange',
    [Food.PINEAPPLE]: 'Ananas',
    [Food.PEAR]: 'Poire',
    [Food.AVOCADO]: 'Avocat',
    [Food.KIWI]: 'Kiwi',
    [Food.APPLE]: 'Pomme',
    [Food.BANANA]: 'Banane',
    [Food.RHUBARB]: 'Rhubarbe',
    [Food.POMELO]: 'Pomelo',
    [Food.STRAWBERRY]: 'Fraise',
    [Food.CITRON]: 'Citron',
    [Food.TOMATO]: 'Tomate'
};

export function getFoodNamesInFrench(): string[]{
    return Object.values(FrenchTranslations);
}

export function getFoodItems(): Food[] {
    console.log();
    return Object.values(Food).filter(v => !isNaN(v as any))  as unknown as Food[];
}