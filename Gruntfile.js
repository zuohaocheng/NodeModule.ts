module.exports = function (grunt) {

  // Import dependencies
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: "build/"
    },
    copy: {
      src: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.js', '**/*.css', '**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    ts: {
      src: {
        src: ['src/**/*.ts'],
        outDir: 'build/',
        options: {
          target: 'es6',
          declaration: true,
          removeComments: false,
          module: 'commonjs',
          "noImplicitAny": true,
          "noImplicitReturns": true,
          "noImplicitThis": true,
          "strictNullChecks": true,
          "noLib": false,
          "inlineSourceMap": true,
          "inlineSources": true
        }
      }
    },
    run: {
      src: {
        args: ['./build/index.js'],
        options: {
        }
      }
    }
    // mochaTest: {
    //   ut: {
    //     src: ['build/server/test/unit/**/*.js']
    //   }
  });

  // Register the default tasks to run when you run grunt
  grunt.registerTask('default', 'go');
  grunt.registerTask('build', ['ts:src', 'copy:src']);
  grunt.registerTask('go', ['build', 'run:src']);
}