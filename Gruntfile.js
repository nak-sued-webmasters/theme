module.exports = function (grunt) {
    grunt.initConfig({
        bowerDirectory: require('bower').config.directory,
        less: {
            compile: {
                options: {
                    compress: false,
                    paths: [
                        'less',
                        'tmp',
                        '<%= bowerDirectory %>/bootstrap/less',
                        '<%= bowerDirectory %>/yamm3/yamm'
                    ]
                },
                files: {
                    'dist/css/bootstrap.css': ['less/theme.less']
                }
            }
        },
        recess: {
            dist: {
                options: {
                    compile: true
                },
                files: {
                    'dist/css/bootstrap.css': ['dist/css/bootstrap.css']
                }
            }
        },
        watch: {
            configFiles: {
                files: ['Gruntfile.js'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['less/*.less'],
                tasks: ['copy', 'less:compile', 'clean'],
                options: {
                    livereload: true
                }
            },
            cssmin: {
                files: ['dist/css/bootstrap.css'],
                tasks: ['cssmin:minify']
            },
            assemble: {
                files: ['pages/*.html', 'pages/examples/*', 'README.md'],
                tasks: ['assemble']
            },
            copy: {
                files: ['img/*', 'fonts/*'],
                tasks: ['copy']
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css',
                ext: '.min.css',
                sourceMap: true
            }
        },
        connect: {
            serve: {
                options: {
                    port: grunt.option('port') || '8000',
                    hostname: grunt.option('host') || 'localhost'
                }
            }
        },
        assemble: {
            pages: {
                options: {
                    data: './bower.json',
                    flatten: true,
                    assets: 'dist'
                },
                files: {
                    'index.html': ['pages/index.html'],
                    'examples/': ['pages/examples/*.html']
                }
            }
        },
        copy: {
            images: {
                expand: true,
                cwd: 'img',
                src: ['*'],
                dest: 'dist/img'
            },
            fonts: {
                expand: true,
                cwd: 'fonts',
                src: ['*'],
                dest: 'dist/fonts'
            },
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= bowerDirectory %>/bootstrap/less',
                        src: ['bootstrap.less'],
                        dest: 'tmp/'
                    }, {
                        expand: true,
                        cwd: '<%= bowerDirectory %>/bootstrap/fonts',
                        src: ['*'],
                        dest: 'dist/fonts'
                    }
                ]
            },
            jquery: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= bowerDirectory %>/jquery/dist',
                        src: ['*'],
                        dest: 'dist/js'
                    }
                ]
            },
            yamm3: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= bowerDirectory %>/yamm3/yamm',
                        src: ['yamm.less'],
                        dest: 'tmp/'
                    }
                ]
            },
            accessibility: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= bowerDirectory %>/bootstrapaccessibilityplugin/plugins',
                        src: ['**/*'],
                        dest: 'dist/'
                    }
                ]
            }

        },
        clean: ['tmp'],
        'gh-pages': {
            options: {
                base: '.',
                user: {
                    name: 'stritti',
                    email: 'Stephan@st-strittmatter.name'
                }
            },
            src: ['**/*']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('assemble');

    grunt.registerTask('build', ['copy', 'less', 'recess', 'cssmin', 'assemble']);
    grunt.registerTask('default', ['build', 'clean']);

    return grunt.registerTask('serve', ['connect', 'watch']);
};