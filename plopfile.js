module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'Add NextJs Component',
        prompts: [{
            type: 'list',
            name: 'type',
            message: 'Component Type',
            choices: ["atom", "component","page"]
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
};