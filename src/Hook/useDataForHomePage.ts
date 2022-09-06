import React, { useState } from 'react'
import { IL1Data, IL3Data } from '../type'

export default function useDataForHomePage() {

    const l2FurnitureData: string[] = ["Accessories",
        "Hinges",
        "Mortise",
        "Handles & Knobs",
        "Towerbolt",
        "Door & Window Fittings",
        "Drawer Fittings",
        " Wardrobe Fittings",
        "Locks",
        "Kitchen Fittings",
        "Profiles",
        "Door Closers",
        "Magnets",
        "Glass Fittings",
        "Screws & Nails",
        "Adhesives",
        "Applicators",
        "Hardware Tools",
        "Shelf Support"]

    const l2HomeDecorData: string[] = ["Lamp & Lights"]

    const [l1Data, setL1Data] = React.useState<IL1Data[]>([{
        id: 1,
        title: 'Furniture Fittings',
        image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
        data: l2FurnitureData
    }, {
        id: 2,
        title: 'Home Decor',
        image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
        data: l2HomeDecorData
    }]);

    const l3Datat: IL3Data[] = [
        {
            id: 1,
            title: 'Accessories',
            data: [
                {
                    name: 'Curtain Brackets',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Curtain+Brackets/Curtain+Brackets.webp"
                },
                {
                    name: 'Mirror Cap',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Curtain+Brackets/Curtain+Brackets.webp"
                }
                ,
                {
                    name: 'Mirror Holder',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mirror+holder/Mirror+Holder.webp"
                }
                ,
                {
                    name: 'Wire Manager',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Wire+Manager/Wire+Manager.webp"
                }
                ,
                {
                    name: 'Bed Lifter',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Bed+Lifter/Bed+Lifter.webp"
                },
                {
                    name: 'Key Hole',
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: 'Curtain Support',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Curtain+Support/Curtain+Support.webp"
                },
                {
                    name: 'Mirror Stud',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mirror+Stud/Mirror+Stud.webp"
                },
                {
                    name: 'Furniture Leg',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Furniture+Leg/Furniture+Leg.webp"
                },
                {
                    name: 'Wall Plug',
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: 'Turn Table',
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: 'Castor',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Castor/Castor.webp"
                },
                {
                    name: 'Ring',
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: 'Peg (Khutti)',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Peg+(Khutti)/Peg+(Khutti).webp"
                }
            ]
        },
        {
            id: 2,
            title: 'Hinges',
            data: [
                {
                    name: 'L Hinges',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/L+Hinges/L+Hinges.webp"
                },
                {
                    name: 'W Hinges',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/W+Hinges/W+Hinges.webp"
                }, {
                    name: 'Z Hinges',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Z+Hinges/Z+Hinges.webp"
                }, {
                    name: 'Auto Hinges',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Auto+Hinges/Auto+Hinges.webp"
                }, {
                    name: 'Door & Window Hinges',
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door_Window+Hinges/Door_Window+Hinges.webp"
                }
            ]
        }, {
            id: 3,
            title: "Mortise",
            data: [
                {
                    name: "Mortise Handles",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mortise+Handles/Mortise+Handles.webp"
                }, {
                    name: "Lock & Latch Body",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Lock+_+Latch+Body/Lock_Latch+Body.webp"
                }, {
                    name: "Euro Profile Cylinder",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Euro+Profile+Cylinder/Euro+Profile+Cylinder.webp"
                }

            ]
        }, {
            id: 4,
            title: "Handles & Knobs",
            data: [
                {
                    name: "Cabinet & Window Handles",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cabinet+_+Window+Handles/Cabinet_Window+Handles.webp"
                },
                {
                    name: "Profile Handles",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Profile+Handles/Profile+Handles.webp"
                }, {
                    name: "Door Handles",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Handles/Door+Handles.webp"
                }, {
                    name: "Concealed/Sliding Handles",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Concealed-Sliding+Handles/Concealed+Sliding+Handles.webp"
                }, {
                    name: "Knobs",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Knobs/Knobs.webp"
                }, {
                    name: "Chest Kadi",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Chest+Kadi/Chest+Kadi.webp"
                }, {
                    name: "Chest Handle",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }
            ]
        }, {
            id: 5,
            title: "Towerbolt",
            data: [
                {
                    name: "Door & Window Towerbolt",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+_+Window+Towerbolt/Door_Window+Towerbolt.webp"
                }, {
                    name: "Auto Towerbolt",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Auto+Towerbolt/Auto+Towerbolt.webp"
                }, {
                    name: "Marble & L Towerbolt",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Marble+_+L+Towerbolt/Marble_L+Towerbolt.webp"
                }, {
                    name: "Concealed Towerbolt",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
            ]
        }, {
            id: 6,
            title: "Door & Window Fittings",
            data: [
                {
                    name: "Aldrop",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Aldrop/Aldrop.webp"
                }, {
                    name: "Door Stopper",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Stopper/Door+Stopper.webp"
                }, {
                    name: "Door Eye",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Eye/Door+Eye.webp"
                }, {
                    name: "Door Chain & Guard",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Chain+_+Guard/Door+Chain_Guard.webp"
                }, {
                    name: "Gate Hook",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Gate+Hook/Gate+Hook.webp"
                }, {
                    name: "Door Silencer & Buffer",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Silencer+_+Buffer/Door+Silencer_Buffer.webp"
                }, {
                    name: "Door Knocker",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Knocker/Door+Knocker.webp"
                }, {
                    name: "Furniture Glide",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Furniture+Glide/Furniture+Glide.webp"
                }]
        }, {
            id: 7,
            title: "Drawer Fittings",
            data: [
                {
                    name: "Telescopic Channel",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Telescopic+Channel/Telescopic+Channel.webp"
                }, {
                    name: "Quadro",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Roller Channel",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Roller+Channel/Roller+Channel.webp"
                }, {
                    name: "Tandem Box",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 8,
            title: "Wardrobe Fittings",
            data: [
                {
                    name: "Hanger Pipe",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Sliding Wardrobe Fitting",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Rod Stay",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Lift Up",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Tie Rod",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Socket",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 9,
            title: "Locks",
            data: [
                {
                    name: "Multi Lock",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Multi+Lock/Multi+Lock.webp"
                }, {
                    name: "Dead Lock",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Dead+Lock/Dead+Lock.webp"
                }, {
                    name: "Cupboard Lock",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cupboard+Lock/Cupboard+Lock.webp"
                }, {
                    name: "Bar Lock",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Sliding Lock",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Sliding+Lock/Sliding+Lock.webp"
                }, {
                    name: "Pad Lock",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Padlock/Pad+Lock.webp"
                }, {
                    name: "Cylindrical Lock",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cylindrical+Lock/Cylindrical+Lock.webp"
                }, {
                    name: "Ducting Lock",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },]
        }, {
            id: 10,
            title: "Kitchen Fittings",
            data: [
                {
                    name: "Kitchen Basket",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Kitchen+Basket/Kitchen+Basket.webp"
                }, {
                    name: "Pantry Unit",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Tall Unit",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Magic Corner",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Snake Corner",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Pullouts",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Kitchen Accessories",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Cabinet lifter",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 11,
            title: "Profiles",
            data: [
                {
                    name: "Shutter Profiles",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "T, U, Profiles",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Profile Handles",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Profile+Handles/Profile+Handles.webp"
                }]
        }, {
            id: 12,
            title: "Door Closers",
            data: [
                {
                    name: "Capsule Door Closer",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Capsule+Door+Closer/Capsule+Door+Closer.webp"
                }, {
                    name: "Wooden Door Closer",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Wooden+Door+Closer/Wooden+Door+Closer.webp"
                }
                , {
                    name: "Concealed Door Closer",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: "Glass Door Closer",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 13,
            title: "Magnets",
            data: [
                {
                    name: "Cabinet & Wardrobe Magnet",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cabinet+_+Wardrobe+Magnet/Cabinet_Wardrobe+Magnet.webp"
                }, {
                    name: "Door Magnet",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Magnet/Door+Magnet.webp"
                }, {
                    name: "Push Magnet",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 14,
            title: "Glass Fittings",
            data: [
                {
                    name: "Glass Fitting",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: "Glass Handles",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: "Floor Spring",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
                {
                    name: "Glass Hinges",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Glass+Hinges/Glass+Hinges.webp"
                }]
        }, {
            id: 15,
            title: "Screws & Nails",
            data: [
                {
                    name: "Nails",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Pan Slotted",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "CSK Wooden",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "CSK Slotted",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "CSK Phillips",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Pan Phillips",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Machine Screws",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Carriage Bolt",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Drywall/Gypsum Screw",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Self Drilling Screw",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Panel Pin",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Full Cut Screw",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },
            ]
        }, {
            id: 16,
            title: "Adhesives",
            data: [
                {
                    name: "Adhesive",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Masking Tape",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }
            ]
        }, {
            id: 17,
            title: "Applicators",
            data: [
                {
                    name: "Anti Termite",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Woodfill",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Plywood Coating",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                },]
        }, {
            id: 18,
            title: "Hardware Tools",
            data: [
                {
                    name: "Blades",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Screwdriver",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Carpentary tools",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 19,
            title: "Shelf Support",
            data: [
                {
                    name: "U Bracket",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Folding Bracket",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Folding+Bracket/Folding+Bracket.webp"
                }, {
                    name: "D Bracket",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "F Bracket",
                    image_url: "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/F+Bracket/F+Bracket.webp"
                }, {
                    name: "L-Support",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }, {
                    name: "Batt Vacuum",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }, {
            id: 20,
            title: "Lamp & Lights",
            data: [
                {
                    name: "Lamp & Lights",
                    image_url: "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
                }]
        }
    ]

    const [l3Data, setL3Data] = useState(l3Datat)

    return {
        l1Data,
        l2FurnitureData,
        l2HomeDecorData,
        l3Data,
        setL3Data
    }
}
