<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Create email content
            $emailContent = "
New Contact Form Submission

Name: {$request->name}
Email: {$request->email}
Phone: {$request->phone}
Subject: {$request->subject}

Message:
{$request->message}

Submitted on: " . now()->format('Y-m-d H:i:s') . "
            ";

            // Send email to it@alfauzan.com
            Mail::raw($emailContent, function ($message) use ($request) {
                $message->to('it@alfauzan.com')
                        ->subject('New Contact Form Submission: ' . $request->subject)
                        ->replyTo($request->email, $request->name);
            });

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We will get back to you soon!'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ], 500);
        }
    }

    public function projectInterest(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'company' => 'nullable|string|max:255',
            'project_title' => 'required|string|max:255',
            'investment_type' => 'required|string|max:100',
            'budget' => 'required|string|max:100',
            'message' => 'nullable|string|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Create email content
            $emailContent = "
New Project Interest Submission

Project: {$request->project_title}
Name: {$request->name}
Email: {$request->email}
Phone: {$request->phone}
            Company: " . ($request->company ?: 'Not specified') . "
Investment Type: {$request->investment_type}
Budget: {$request->budget}

Message:
" . ($request->message ?: 'No additional message') . "

Submitted on: " . now()->format('Y-m-d H:i:s') . "
            ";

            // Send email to it@alfauzan.com
            Mail::raw($emailContent, function ($message) use ($request) {
                $message->to('it@alfauzan.com')
                        ->subject('New Project Interest: ' . $request->project_title)
                        ->replyTo($request->email, $request->name);
            });

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your interest! We will contact you within 24 hours.'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error sending your interest. Please try again later.'
            ], 500);
        }
    }
}
