(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(e,a,o){"use strict";o.r(a);var s=o(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"integration-into-existing-laravel-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integration-into-existing-laravel-project"}},[e._v("#")]),e._v(" Integration Into Existing Laravel Project")]),e._v(" "),o("p",[e._v("This guide will be helpful when you want to integrate InfyChat into your existing projects.")]),e._v(" "),o("p",[e._v("Here we have tried our best to provide simple steps that help you to integrate InfyChat into your existing Laravel Project.")]),e._v(" "),o("p",[o("strong",[e._v("NOTE:: While copying/replacing files from InfyChat, make sure you have a backup of your files.\nYour changes may be removed while replacing files. Also copy files at the same path from where you copied from.")])]),e._v(" "),o("h2",{attrs:{id:"update-composer-json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-composer-json"}},[e._v("#")]),e._v(" Update Composer.json")]),e._v(" "),o("p",[e._v("Add the following packages to your composer.json in the "),o("code",[e._v("require")]),e._v(" section.")]),e._v(" "),o("pre",[o("code",[e._v('"berkayk/onesignal-laravel":"^1.0",\n"embed/embed":"^3.4",\n"guzzlehttp/guzzle": "^6.5",\n"infyomlabs/coreui-templates": "6.0.x-dev",\n"infyomlabs/laravel-generator": "6.0.x-dev",\n"intervention/image": "^2.5",\n"laminas/laminas-diactoros": "^2.2",\n"laravel/socialite": "^4.3",\n"laravelcollective/html": "^6.0",\n"league/flysystem-aws-s3-v3": "^1.0",\n"pusher/pusher-php-server": "~4.0",\n"spatie/laravel-permission": "^3.2",\n"yajra/laravel-datatables-oracle": "~9.0",\n"laravel/passport": "^7.5"\n')])]),e._v(" "),o("p",[e._v("Add the following packages to your composer.json in the "),o("code",[e._v("require-dev")]),e._v(" section.")]),e._v(" "),o("pre",[o("code",[e._v(' barryvdh/laravel-ide-helper": "^2.6"\n')])]),e._v(" "),o("p",[o("strong",[e._v("Note:: Ignore packages that you already have into your composer.json.\nBut make sure the package version you have is compatible with the version that InfyChat has.")])]),e._v(" "),o("p",[e._v("Run below command after adding all the above packages.")]),e._v(" "),o("pre",[o("code",[e._v("composer update \n")])]),e._v(" "),o("h2",{attrs:{id:"add-service-providers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-service-providers"}},[e._v("#")]),e._v(" Add Service Providers")]),e._v(" "),o("p",[e._v("Add the following service providers to "),o("code",[e._v("config/app.php")])]),e._v(" "),o("pre",[o("code",[e._v("Laravel\\Socialite\\SocialiteServiceProvider::class,\nBerkayk\\OneSignal\\OneSignalServiceProvider::class,\nCollective\\Html\\HtmlServiceProvider::class,\nLaracasts\\Flash\\FlashServiceProvider::class,\n\\InfyOm\\Generator\\InfyOmGeneratorServiceProvider::class,\n\\InfyOm\\CoreUITemplates\\CoreUITemplatesServiceProvider::class,\nYajra\\DataTables\\DataTablesServiceProvider::class,\nBarryvdh\\LaravelIdeHelper\\IdeHelperServiceProvider::class,\n")])]),e._v(" "),o("h2",{attrs:{id:"add-aliases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-aliases"}},[e._v("#")]),e._v(" Add Aliases")]),e._v(" "),o("p",[e._v("Add the following aliases to "),o("code",[e._v("config/app.php")])]),e._v(" "),o("pre",[o("code",[e._v("'Form'         => Collective\\Html\\FormFacade::class,\n'Html'         => Collective\\Html\\HtmlFacade::class,\n'Flash'        => Laracasts\\Flash\\Flash::class,\n'DataTables'   => Yajra\\DataTables\\Facades\\DataTables::class,\n'Image'        => Intervention\\Image\\Facades\\Image::class,\n'Socialite'    => \\Laravel\\Socialite\\Facades\\Socialite::class,\n'OneSignal'  => Berkayk\\OneSignal\\OneSignalFacade::class,\n")])]),e._v(" "),o("p",[e._v("Now run below optional command to generate proper docs and references. (Optional)")]),e._v(" "),o("pre",[o("code",[e._v("php artisan ide-helper:generate\n")])]),e._v(" "),o("p",[e._v("Uncomment "),o("code",[e._v("App\\Providers\\BroadcastServiceProvider::class")]),e._v(", from "),o("code",[e._v("config/app.php")])]),e._v(" "),o("h2",{attrs:{id:"copy-migration-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-migration-files"}},[e._v("#")]),e._v(" Copy Migration Files")]),e._v(" "),o("p",[e._v("Copy all migrations from "),o("code",[e._v("database/migrations/")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Note:: You may already have migrations for "),o("code",[e._v("users")]),e._v(", "),o("code",[e._v("failed_jobs")]),e._v("  and "),o("code",[e._v("password_reset")]),e._v(" tables.\nYou need to do it carefully, so either replace full migration or insert missing fields.")])]),e._v(" "),o("p",[e._v("Then Run:")]),e._v(" "),o("pre",[o("code",[e._v("php artisan migrate\n")])]),e._v(" "),o("h2",{attrs:{id:"add-routes-channels"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-routes-channels"}},[e._v("#")]),e._v(" Add Routes / Channels")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Add routes from "),o("code",[e._v("routes/web.php")]),e._v(" to your routes file")])]),e._v(" "),o("li",[o("p",[e._v("Add channels from "),o("code",[e._v("routes/channels.php")]),e._v(" to your channels.php")])])]),e._v(" "),o("p",[o("strong",[e._v("Note:: While adding these routes, make sure you don't add duplicate routes which already exist in your routes file.")])]),e._v(" "),o("h2",{attrs:{id:"copy-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-views"}},[e._v("#")]),e._v(" Copy Views")]),e._v(" "),o("h3",{attrs:{id:"copy-main-layouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-main-layouts"}},[e._v("#")]),e._v(" Copy Main Layouts")]),e._v(" "),o("p",[e._v("Copy main layouts from "),o("code",[e._v("resources/layouts/")]),e._v(" copy all files from the "),o("code",[e._v("layouts")]),e._v(" folder and add/replace it into your project on the same path.")]),e._v(" "),o("h3",{attrs:{id:"copy-conversations-roles-users-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-conversations-roles-users-views"}},[e._v("#")]),e._v(" Copy Conversations/Roles/Users Views")]),e._v(" "),o("p",[e._v("Copy following views to your resources/views folder")]),e._v(" "),o("pre",[o("code",[e._v("- resources/views/chat\n- resources/views/users\n- resources/views/role\n- resources/views/partials\n- resources/views/profile.blade.php\n")])]),e._v(" "),o("h3",{attrs:{id:"copy-auth-landing-page-views-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-auth-landing-page-views-optional"}},[e._v("#")]),e._v(" Copy Auth / Landing Page Views (Optional)")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Copy auth views from "),o("code",[e._v("resources/views/auth/")]),e._v(" if you want to overwrite your existing auth screens")])]),e._v(" "),o("li",[o("p",[e._v("Copy Home view from "),o("code",[e._v("resources/views/home/")]),e._v(" if you want to overwrite landing page view")])])]),e._v(" "),o("h2",{attrs:{id:"copy-models"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-models"}},[e._v("#")]),e._v(" Copy Models")]),e._v(" "),o("p",[e._v("You have to create the "),o("code",[e._v("Models")]),e._v(" folder into "),o("code",[e._v("app")]),e._v(" if not exist and copy all models from "),o("code",[e._v("app\\Models")])]),e._v(" "),o("p",[o("strong",[e._v("NOTE:: We moved the "),o("code",[e._v("User.php")]),e._v(" model to "),o("code",[e._v("App\\Models\\User")]),e._v(". So you need to change your "),o("code",[e._v("auth.php")]),e._v(".\nOr if you have your existing "),o("code",[e._v("User.php")]),e._v(" then you need to make changes accordingly everywhere in code.")])]),e._v(" "),o("h2",{attrs:{id:"change-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#change-configuration"}},[e._v("#")]),e._v(" Change Configuration")]),e._v(" "),o("p",[e._v("You need to change database mode from "),o("code",[e._v("config/database.php")])]),e._v(" "),o("p",[e._v("Change your connection mode (mysql) from "),o("code",[e._v("strict => true")]),e._v(" to "),o("code",[e._v("strict => false")])]),e._v(" "),o("pre",[o("code",[e._v("    'strict' => false,        \n")])]),e._v(" "),o("p",[e._v("As we are using the "),o("code",[e._v("App\\Models\\User")]),e._v(" model you need to change into "),o("code",[e._v("config/auth.php")]),e._v(".")]),e._v(" "),o("p",[e._v("There is a "),o("code",[e._v("provider")]),e._v(" section where you need to change user model namespace. Like the below example.")]),e._v(" "),o("pre",[o("code",[e._v("'providers' => [\n        'users' => [\n            'driver' => 'eloquent',\n            'model' => \\App\\Models\\User::class,\n        ],\n")])]),e._v(" "),o("h2",{attrs:{id:"copy-form-requests-and-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-form-requests-and-jobs"}},[e._v("#")]),e._v(" Copy Form Requests and Jobs")]),e._v(" "),o("ul",[o("li",[e._v("Copy "),o("code",[e._v("app/Http/Requests")]),e._v(" folder into your project.")]),e._v(" "),o("li",[e._v("Create "),o("code",[e._v("Jobs")]),e._v(" folder into "),o("code",[e._v("app")]),e._v(" and copy "),o("code",[e._v("app\\Jobs")]),e._v(" folder from InfyChat.")]),e._v(" "),o("li",[e._v("Create "),o("code",[e._v("Mail")]),e._v(" folder into "),o("code",[e._v("app")]),e._v(" and copy "),o("code",[e._v("app/Mail")]),e._v(" folder from InfyChat.")]),e._v(" "),o("li",[e._v("Create "),o("code",[e._v("Events")]),e._v(" folder "),o("code",[e._v("app")]),e._v(" and copy "),o("code",[e._v("app\\Events")]),e._v(" folder from InfyChat.")])]),e._v(" "),o("h2",{attrs:{id:"copy-controllers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-controllers"}},[e._v("#")]),e._v(" Copy Controllers")]),e._v(" "),o("p",[e._v("Copy all controllers from "),o("code",[e._v("app/Http/Controllers")]),e._v(". It may overwrite your auth controllers too.\nSo make sure your existing code isn't removed.")]),e._v(" "),o("h2",{attrs:{id:"copy-middleware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-middleware"}},[e._v("#")]),e._v(" Copy Middleware")]),e._v(" "),o("ul",[o("li",[e._v("Copy "),o("code",[e._v("App\\Http\\Middleware\\SendMessage")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("App\\Http\\Middleware\\CheckUserIsActivated")])])]),e._v(" "),o("p",[e._v("Put the following codes into "),o("code",[e._v("app\\Http\\kernel.php")]),e._v(". There is a property "),o("code",[e._v("$middlewareGroups")]),e._v(". Put the below code into it.")]),e._v(" "),o("pre",[o("code",[e._v("'user.activated'     => CheckUserIsActivated::class,\n'role'               => \\Spatie\\Permission\\Middlewares\\RoleMiddleware::class,\n'permission'         => \\Spatie\\Permission\\Middlewares\\PermissionMiddleware::class,\n'role_or_permission' => \\Spatie\\Permission\\Middlewares\\RoleOrPermissionMiddleware::class,\n'sendMessage'        => SendMessage::class,\n")])]),e._v(" "),o("p",[e._v("Copy "),o("code",[e._v("app/Console/ApiOperationFailedException")])]),e._v(" "),o("h2",{attrs:{id:"copy-repositories-datatables-files-and-traits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-repositories-datatables-files-and-traits"}},[e._v("#")]),e._v(" Copy Repositories / DataTables Files and Traits")]),e._v(" "),o("ul",[o("li",[e._v("Copy Repositories from "),o("code",[e._v("App\\Repositories\\")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("Queries")]),e._v(" (Datatable Files) from "),o("code",[e._v("App\\Querie\\")])]),e._v(" "),o("li",[e._v("Copy Rules from "),o("code",[e._v("App\\Rules")])]),e._v(" "),o("li",[e._v("Copy Image Trait from "),o("code",[e._v("App\\Traits\\")])])]),e._v(" "),o("h2",{attrs:{id:"copy-helpers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-helpers"}},[e._v("#")]),e._v(" Copy helpers")]),e._v(" "),o("p",[e._v("Copy "),o("code",[e._v("app\\helpers.php")]),e._v(" file and put a reference of it into "),o("code",[e._v("composer.json")])]),e._v(" "),o("p",[e._v("Add the following into "),o("code",[e._v("composer.json")]),e._v(" autoload section")]),e._v(" "),o("pre",[o("code",[e._v('"autoload": {\n    "files": ["app/helpers.php"],\n}\n')])]),e._v(" "),o("p",[e._v("Then run the below command:")]),e._v(" "),o("pre",[o("code",[e._v("composer dump-autoload -o\n")])]),e._v(" "),o("h2",{attrs:{id:"copy-assets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-assets"}},[e._v("#")]),e._v(" Copy Assets")]),e._v(" "),o("ul",[o("li",[e._v("Copy assets folder from "),o("code",[e._v("resources\\assets")])]),e._v(" "),o("li",[e._v("Copy language file from "),o("code",[e._v("resources/lang")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("public/css")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("public/js")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("public/uploads")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("public/OneSignal.js")])]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("App\\Exception\\handler.php")])])]),e._v(" "),o("h2",{attrs:{id:"update-package-json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-package-json"}},[e._v("#")]),e._v(" Update Package.json")]),e._v(" "),o("p",[e._v("Add the following devDependency into your package.json")]),e._v(" "),o("pre",[o("code",[e._v('"devDependencies": {\n    "@babel/plugin-transform-modules-commonjs": "^7.9.0",\n    "@babel/plugin-transform-strict-mode": "^7.8.3",\n    "axios": "^0.19.2",\n    "cross-env": "^5.2.1",\n    "laravel-mix": "^4.0.7",\n    "lodash": "^4.17.13",\n    "resolve-url-loader": "^2.3.1",\n    "sass": "^1.26.3",\n    "sass-loader": "^7.1.0",\n    "vue-template-compiler": "^2.6.11"\n},   \n')])]),e._v(" "),o("p",[e._v("Add the following dependency into your package.json")]),e._v(" "),o("pre",[o("code",[e._v('"dependencies": {\n    "@coreui/coreui": "^2.1.16",\n    "@coreui/icons": "^0.3.0",\n    "bad-words": "^3.0.3",\n    "bootstrap": "^4.4.1",\n    "emojionearea": "^3.4.1",\n    "font-awesome": "^4.7.0",\n    "icheck": "^1.0.2",\n    "jquery": "^3.4.1",\n    "jquery-toast-plugin": "^1.3.2",\n    "laravel-echo": "^1.5.4",\n    "perfect-scrollbar": "^1.5.0",\n    "popper.js": "^1.16.1",\n    "pusher-js": "^5.1.1",\n    "simple-line-icons": "^2.4.1",\n    "sweetalert2": "^9.10.6",\n    "video.js": "^7.7.5"\n}\n')])]),e._v(" "),o("p",[e._v("Now delete your package-lock.json and run below command:")]),e._v(" "),o("pre",[o("code",[e._v("npm install\n")])]),e._v(" "),o("h2",{attrs:{id:"update-env-variables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-env-variables"}},[e._v("#")]),e._v(" Update ENV variables")]),e._v(" "),o("p",[e._v("You can find env variable changes docs "),o("router-link",{attrs:{to:"/docs/#_1-setup-environment-env-file"}},[e._v("here")])],1),e._v(" "),o("h2",{attrs:{id:"run-commands-cache-cleanup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-commands-cache-cleanup"}},[e._v("#")]),e._v(" Run Commands (Cache Cleanup)")]),e._v(" "),o("p",[e._v("While copying these files, you are may be unable to see changes or facing some style issues.")]),e._v(" "),o("p",[e._v("Please run the following command when you have completed all steps:")]),e._v(" "),o("pre",[o("code",[e._v("php artisan view:clear\n\nphp artisan route:clear\n\nphp artiasn config:cache\n")])]),e._v(" "),o("h2",{attrs:{id:"update-webpack-mix-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-webpack-mix-js"}},[e._v("#")]),e._v(" Update webpack.mix.js")]),e._v(" "),o("p",[e._v("copy "),o("code",[e._v("webpack.mix.js")]),e._v(" file, and run the final command to make build.")]),e._v(" "),o("pre",[o("code",[e._v("npm run dev\n")])]),e._v(" "),o("p",[e._v("And it should be ready to Go, Enjoy!")])])}),[],!1,null,null,null);a.default=r.exports}}]);