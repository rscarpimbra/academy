<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
                  DB::statement(
                      "
                          CREATE OR REPLACE VIEW v_courses AS
                          (
                              SELECT
                                  `c`.`id`,
                                  `c`.`uuid`,
                                  `c`.`title`,
                                  `c`.`language_id`,
                                  `lan`.`lan_description`,
                                  `c`.`sub_title`,
                                  `c`.`author_id`,
                                  `c`.`description`,
                                  `c`.`rate`,
                                  `c`.`category_id`,
                                  `cat`.`title` AS `cat_description`,
                                  `c`.`img_path`

                                  FROM `courses` c

                                  LEFT JOIN `category`    `cat`   ON `cat`.`id` = `c`.`category_id`
                                  LEFT JOIN `languages`   `lan`   ON `lan`.`id` = `c`.`language_id`
                          )
                      "
                  );
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP VIEW `v_courses`");
    }
};
