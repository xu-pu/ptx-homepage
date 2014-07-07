'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        pathConfig: {
            src: 'src',
            dist: 'dist',
            build: 'build',
            venders: 'venders'
        },

        pkg: grunt.file.readJSON('package.json'),

        watch: {

            all: {
                files: [
                    'src/scripts/**/*.js',
                    'src/styles/scss/**/*.scss'
                ],
                tasks: ['build']
            }

        },

        neuter :{

            options: {
                template: '{%= src %}'
            },

            'build/scripts/base.js':'app/scripts/application.js'

        },

        concat_sourcemap: {

            unittest: {
                files: {
                    'build/scripts/sfmunittest.js': [
                        '<%= pathConfig.venders %>/numericjs/src/numeric.js',
                        '<%= pathConfig.venders %>/numericjs/src/svd.js',
                        'app/scripts/SFM/**/*.js',
                        'unittest/headers/SfmUnittestHeader.js'
                    ]
                }
            }

        },

        copy: {
            build: {
                files: {
                    'build/index.html': 'src/index.build.html'
                }
            }
        },

        compass: {

            options: {
                sassDir: 'src/styles/scss'
            },

            build: {
                options: {
                    cssDir: '<%= pathConfig.build %>/styles'
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-neuter');

    grunt.registerTask('build', [
        'neuter',
        'compass:build',
        'copy:build'
    ]);

    grunt.registerTask('dist', ['build', 'uglify:dist']);

};