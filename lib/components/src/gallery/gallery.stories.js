import { withDesign } from 'storybook-addon-designs'
import "./gallery"
import '../list/list-expansion';
import '../list/list-item';

import * as gallery from "../../../../stories/demos/gallery.content.html";
import * as galleryDetails from "../../../../stories/demos/galleryDetails.content.html";
import * as galleryAssets from "../../../../stories/demos/galleryAssets.content.html";

export default {
    title: 'Patterns/Gallery',
    argTypes: {
    },
    decorators: [withDesign],
    parameters: {
        layout: 'fullscreen',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/hEM22MwX8C0xQjYJ9deEsq/Playbook-Designs?node-id=1160%3A166286',
        },
    }
};


export const Gallery = ({}) => gallery;
export const GalleryDetails = ({}) => galleryDetails;
export const GalleryAssets = ({}) => galleryAssets;