import { withDesign } from 'storybook-addon-designs'

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