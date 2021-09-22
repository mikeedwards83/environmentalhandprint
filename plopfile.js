module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'Add NextJs Component',
        prompts: [{
            type: 'list',
            name: 'type',
            message: 'Component Type',
            choices: ["atom", "component","page","material"]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Component Name'
        }],
        actions: [{
            type: 'add',
            path: 'site/stories/{{type}}s/{{name}}/{{name}}.tsx',
            templateFile: 'site/plop-templates/Component.tsx.hbs'
        },
        {
            type: 'add',
            path: 'site/stories/{{type}}s/{{name}}/{{name}}.stories.tsx',
            templateFile: 'site/plop-templates/Component.stories.tsx.hbs'
        },
        {
            type: 'add',
            path: 'site/stories/{{type}}s/{{name}}/{{name}}.scss',
            templateFile: 'site/plop-templates/Component.scss.hbs'
        }]
    });

    plop.setGenerator('page', {
        description: 'Add NextJs Page',
        prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component Name'
        },
        {
            type: 'input',
            name: 'folder',
            message: 'Folder Name'
        }],
        actions: [{
            type: 'add',
            path: 'site/pages/{{folder}}/{{name}}.tsx',
            templateFile: 'site/plop-templates/Page.tsx.hbs'
        }
      ]
    });
    plop.setGenerator('slug', {
        description: 'Add NextJs Slug',
        prompts: [       
        {
            type: 'input',
            name: 'folder',
            message: 'Folder Name'
        }],
        actions: [{
            type: 'add',
            path: 'site/pages/{{folder}}/[slug].tsx',
            templateFile: 'site/plop-templates/Slug.tsx.hbs'
        }
      ]
    });
};