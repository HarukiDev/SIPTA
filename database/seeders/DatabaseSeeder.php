<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Akademik;
use App\Models\User;
use App\Models\Dosen;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::factory(1)->create();
        // Dosen::factory(15)->create();
        Dosen::create([
            'name' => 'Dr. Abdiansah, M.Cs.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Natural Language Processing, Chatbot Development, Question Answering Systems, Computer Vision',
            'telp' => '62895378734847',
            'foto' => false,
        ]);
        
        Dosen::create([
            'name' => 'Alfarissi, M.Comp.Sc.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Machine Learning, Information Security',
            'telp' => '6282172322530',
            'foto' => true,
        ]);
        
        Dosen::create([
            'name' => 'Alvi Syahrini Utami, M.Kom',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Machine Learning, Natural Language Processing',
            'telp' => '628121570934',
            'foto' => true,
        ]);
        
        Dosen::create([
            'name' => 'Dian Palupi Rini, Ph.D.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Artificial Neural Networks, Fuzzy Logic, Data Mining, Optimization',
            'telp' => '628117102720',
            'foto' => false,
        ]);
        
        Dosen::create([
            'name' => 'Julian Supardi, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Image Processing, Pattern Recognition, Cryptography, Machine Learning, Data Science',
            'telp' => '6281242276614',
            'foto' => true,
        ]);
        
        Dosen::create([
            'name' => 'Kanda Januar Miraswan, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Artificial Intelligence, Data Mining, Image Processing',
            'telp' => '6281977792941',
            'foto' => true,
        ]);

        Dosen::create([
            'name' => 'Mastura Diana Marieska, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Distributed Systems, Parallel Systems/Programming, Real Time Operating Systems, Network/Socket Programming',
            'telp' => '6285721250155',
            'foto' => false
        ]);

        Dosen::create([
            'name' => 'Dr. M Fachrrurrozi, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Image Processing, Computer Vision, Software Development',
            'telp' => '62852-1335-5478',
            'foto' => false
        ]);

        Dosen::create([
            'name' => 'Novi Yusliani, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Keyphrase/Keyword Extraction, Text Classification, Question Answering System',
            'telp' => '6281367108400',
            'foto' => true
        ]);

        Dosen::create([
            'name' => 'Osvari Arsalan, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Data Analysis, Data Mining, Software Project Management, Software Development, Cryptography',
            'telp' => '6281377890286',
            'foto' => true
        ]);

        Dosen::create([
            'name' => 'Rifkie Primartha, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Machine Learning, Data Mining, Data Scientist',
            'telp' => '6281273746111',
            'foto' => false
        ]);

        Dosen::create([
            'name' => 'Rizki Kurniati, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Data Analysis, Data Mining, Machine Learning, Sentiment Analysis, Expert Systems',
            'telp' => '628117826129',
            'foto' => true
        ]);

        Dosen::create([
            'name' => 'Samsuryadi, M.Kom, Ph.D.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Image Processing, Pattern Recognition',
            'telp' => '628127814524',
            'foto' => false
        ]);
        
        Dosen::create([
            'name' => 'Yunita',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Decision Support Systems, Expert Systems, Metaheuristic Optimization',
            'telp' => '62895326180661',
            'foto' => true
        ]);
        
        Dosen::create([
            'name' => 'Anggina Primanita, M.IT, Ph.D.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Entertainment Games, Serious Games, Fuzzy Decision Making',
            'telp' => '628156970755',
            'foto' => true
        ]);
        
        Dosen::create([
            'name' => 'Annisa Darmawahyuni, M.Kom.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Biomedical Signal Processing, Biomedical Image Processing, Health-related data Analysis, Deep learning',
            'telp' => '6285367071001',
            'foto' => true
        ]);
        
        Dosen::create([
            'name' => 'Desty Rodiah, M.T.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Ontology of Web Semantics, Multi-Agent Systems, Natural Language Processing, Expert Systems',
            'telp' => '6289627061196',
            'foto' => true
        ]);
        
        Dosen::create([
            'name' => 'Hadipurnawan Satria, M.Sc., Ph.D.',
            'jurusan' => 'Tehnik Informatika',
            'bidang' => 'Vehicle Routing Problem (VRP), Machine Learning, Platform-Based Development (PBD)',
            'telp' => '6282177465696',
            'foto' => false
        ]);


        Akademik::create([
            'totalsks' => 134,
            'metodologi' => true,
            'kkn' => true,
            'ipk' => 3.00,
            's1' => 4.00,
            's2' => 4.00,
            's3' => 4.00,
            's4' => 4.00,
            's5' => 3.64,
            's6' => 0.00,
            's7' => 0.00,
            's8' => 0.00,
        ]);
    }
}
