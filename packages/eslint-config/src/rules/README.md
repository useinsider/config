# Rules

Each file contains only the rules that are specific to its name.
When a new plugin is introduced, its rule file must be named after the plugin
and it should only contain rules that are specific to it. Even if it suppresses
a core rule, oppressed rule must be declared inside the `core.cjs` file.
